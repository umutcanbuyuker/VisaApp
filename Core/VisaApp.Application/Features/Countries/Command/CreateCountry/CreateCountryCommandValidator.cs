using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VisaApp.Application.Features.Countries.Command.CreateCountry
{
    public class CreateCountryCommandValidator : AbstractValidator<CreateCountryCommandRequest>
    {
        public CreateCountryCommandValidator() 
        { 
            RuleFor(x => x.Name).NotEmpty();
            RuleFor(x => x.Flag).NotEmpty();
        }
    }
}
