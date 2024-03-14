using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using VisaApp.Application.Bases;
using VisaApp.Application.Interface.AutoMapper;
using VisaApp.Application.Interface.UnitOfWorks;
using VisaApp.Domain.Entities;

namespace VisaApp.Application.Features.Auth.Command.Register
{
    public class RegisterCommandHandler : BaseHandler, IRequestHandler<RegisterCommandRequest>
    {
        private readonly UserManager<User> userManager;
        private readonly RoleManager<Role> roleManager;

        public RegisterCommandHandler(UserManager<User> userManager, RoleManager<Role> roleManager, IUnitOfWork unitOfWork, IMapper mapper, IHttpContextAccessor httpContextAccessor) : base(unitOfWork, mapper,httpContextAccessor)
        {
            this.userManager = userManager;
            this.roleManager = roleManager;
        }
        public async Task Handle(RegisterCommandRequest request, CancellationToken cancellationToken)
        {
            User user = mapper.Map<User, RegisterCommandRequest>(request);
            user.UserName = request.Email;
            user.SecurityStamp = Guid.NewGuid().ToString();

            IdentityResult result = await userManager.CreateAsync(user,request.Password);
            if (result.Succeeded)
            {
                if (!await roleManager.RoleExistsAsync("user")) ;
                await roleManager.CreateAsync(new Role
                {
                    Id = Guid.NewGuid(),
                    Name = "user",
                    NormalizedName = "USER",
                    ConcurrencyStamp = Guid.NewGuid().ToString(),
                });

                await userManager.AddToRoleAsync(user, "USER");
            }
 
        }
    }
}
