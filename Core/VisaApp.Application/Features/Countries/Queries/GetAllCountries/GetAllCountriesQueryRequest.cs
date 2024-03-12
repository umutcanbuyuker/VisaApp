using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VisaApp.Application.Features.Countries.Queries.GetAllCountries
{
    public class GetAllCountriesQueryRequest : IRequest<IList<GetAllCountriesQueryResponse>>
    {

    }
}
