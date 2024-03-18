using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VisaApp.Application.Bases;
using VisaApp.Application.Features.Auth.Rules;
using VisaApp.Application.Interface.AutoMapper;
using VisaApp.Application.Interface.Tokens;
using VisaApp.Application.Interface.UnitOfWorks;
using VisaApp.Domain.Entities;

namespace VisaApp.Application.Features.Auth.Login
{
    public class LoginCommandHandler : BaseHandler, IRequestHandler<LoginCommandRequest, LoginCommandResponse>
    {
        private readonly AuthRules authRules;
        public readonly UserManager<User> userManager;
        public readonly RoleManager<Role> roleManager;
        private readonly ITokenService tokenService;
        private readonly IConfiguration configuration;
        public LoginCommandHandler(
            AuthRules authRules,
            UserManager<User> userManager,
            IUnitOfWork unitOfWork,
            IMapper mapper, 
            IHttpContextAccessor httpContextAccessor,
            ITokenService tokenService,
            IConfiguration configuration) : base(unitOfWork, mapper, httpContextAccessor)
        {
            this.authRules = authRules;
            this.userManager = userManager;
            this.tokenService = tokenService;
            this.configuration = configuration;
        }

        public async Task<LoginCommandResponse> Handle(LoginCommandRequest request, CancellationToken cancellationToken)
        {
            User user = await userManager.FindByEmailAsync(request.Email);
            bool checkPassword = await userManager.CheckPasswordAsync(user, request.Password);

            await authRules.EmailOrPasswordShouldNotBeInvalid(user, checkPassword);

            IList<string> roles = await userManager.GetRolesAsync(user);

            JwtSecurityToken token = await tokenService.CreateToken(user, roles);
            string refreshToken = tokenService.GenerateRefreshToken();

            int.TryParse(configuration["JWT:RefreshTokenValidityInDays"], out int refreshTokenValidityInDays);

            user.RefreshToken = refreshToken;
            user.RefreshTokenExpiryTime = DateTime.Now.AddDays(refreshTokenValidityInDays);

            await userManager.UpdateAsync(user);
            await userManager.UpdateSecurityStampAsync(user);

            string _token = new JwtSecurityTokenHandler().WriteToken(token);

            await userManager.SetAuthenticationTokenAsync(user,"Default","AccessToken",_token);

            return new()
            {
                Token = _token,
                RefreshToken = refreshToken,
                Expiration = token.ValidTo
            };
        }
    }
}
