using MediatR;
using Microsoft.EntityFrameworkCore;
using VisaApp.Application.DTOs;
using VisaApp.Application.Interface.AutoMapper;
using VisaApp.Application.Interface.UnitOfWorks;
using VisaApp.Domain.Entities;

namespace VisaApp.Application.Features.Countries.Queries.GetAllCountries
{
    public class GetAllCountriesQueryHandler : IRequestHandler<GetAllCountriesQueryRequest, IList<GetAllCountriesQueryResponse>>
    {
        private readonly IUnitOfWork unitOfWork;
        public readonly IMapper mapper;

        public GetAllCountriesQueryHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
        }

        public async Task<IList<GetAllCountriesQueryResponse>> Handle(GetAllCountriesQueryRequest request, CancellationToken cancellationToken)
        {
            var countries = await unitOfWork.GetReadReadRepository<Country>().GetAllAsync(include: x => x.Include(b => b.Categories));

            var brand = mapper.Map<CategoryDto, Category>(new Category());

            var map = mapper.Map<GetAllCountriesQueryResponse ,Country>(countries);

            return map;
        }
    }
}
