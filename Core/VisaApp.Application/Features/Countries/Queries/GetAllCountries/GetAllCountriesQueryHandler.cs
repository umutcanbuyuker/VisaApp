using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VisaApp.Application.Interface.UnitOfWorks;
using VisaApp.Domain.Entities;

namespace VisaApp.Application.Features.Countries.Queries.GetAllCountries
{
    public class GetAllCountriesQueryHandler : IRequestHandler<GetAllCountriesQueryRequest, IList<GetAllCountriesQueryResponse>>
    {
        private readonly IUnitOfWork unitOfWork;

        public GetAllCountriesQueryHandler(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }
        public async Task<IList<GetAllCountriesQueryResponse>> Handle(GetAllCountriesQueryRequest request, CancellationToken cancellationToken)
        {
            var countries = await unitOfWork.GetReadReadRepository<Country>().GetAllAsync();

            List<GetAllCountriesQueryResponse> response = new ();

            foreach (var country in response)
                response.Add(new GetAllCountriesQueryResponse
                {
                    Name = country.Name,
                    Flag = country.Flag,
                });

            return response;
            //automapper needs to be implemented here.
        }
    }
}
