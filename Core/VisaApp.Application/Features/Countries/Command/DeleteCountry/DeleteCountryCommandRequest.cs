using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VisaApp.Application.Features.Countries.Command.DeleteCountry
{
    public class DeleteCountryCommandRequest : IRequest<Unit>
    {
        public int Id { get; set; }
    }
}
