using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VisaApp.Application.Features.Countries.Command.DeleteCountry
{
    public class DeleteCountryCommandValidator : AbstractValidator<DeleteCountryCommandRequest>
    {
        public DeleteCountryCommandValidator()
        {
            RuleFor(x => x.Id)
                .GreaterThan(0)
                .NotEmpty();
        }
    }
}
