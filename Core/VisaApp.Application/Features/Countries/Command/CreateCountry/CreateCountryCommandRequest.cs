using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VisaApp.Application.Features.Countries.Command.CreateCountry
{
    public class CreateCountryCommandRequest : IRequest
    {
        public string Name { get; set; }
        public string Flag { get; set; }
        public IList<int> CategoryIds { get; set; }
    }
}
