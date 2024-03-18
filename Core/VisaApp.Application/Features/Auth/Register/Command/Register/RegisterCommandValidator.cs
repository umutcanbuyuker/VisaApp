using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VisaApp.Application.Features.Auth.Register.Command.Register
{
    public class RegisterCommandValidator : AbstractValidator<RegisterCommandRequest>
    {
        public RegisterCommandValidator()
        {
            RuleFor(x => x.FullName)
                .NotEmpty()
                .MaximumLength(50)
                .MinimumLength(2)
                .WithName("İsim Soyisim");

            RuleFor(x => x.Email)
                .NotEmpty()
                .MaximumLength(60)
                .MinimumLength(8)
                .EmailAddress()
                .WithName("E-posta Adresi");

            RuleFor(x => x.Password)
                .NotEmpty()
                .MaximumLength(50)
                .MinimumLength(6)
                .WithName("Parola");

            RuleFor(x => x.ConfirmPassword)
                .NotEmpty()
                .Equal(x => x.Password)
                .WithName("Parola Tekrarı");
        }
    }
}
