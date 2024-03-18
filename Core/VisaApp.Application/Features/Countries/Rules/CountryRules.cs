using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VisaApp.Application.Bases;
using VisaApp.Application.Features.Countries.Exceptions;
using VisaApp.Domain.Entities;

namespace VisaApp.Application.Features.Countries.Rules
{
    public class CountryRules : BaseRules
    {
        public Task CountryNameMustNotBeSame (IList<Country> countries, string countryName)
        {
            if (countries.Any(x => x.Name == countryName)) throw new CountryNameMustNotBeSame();
            return Task.CompletedTask;
        }
    }
}
