using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VisaApp.Application.Features.Countries.Queries.GetAllCountries
{
    public class GetAllCountriesQueryResponse
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Flag { get; set; }
    }
}
