using MediatR;

namespace VisaApp.Application.Features.Auth.Register.Command.Register
{
    public class RegisterCommandRequest : IRequest
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
    }
}
