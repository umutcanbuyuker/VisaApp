using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VisaApp.Application.Interface.AutoMapper;
using VisaApp.Application.Interface.UnitOfWorks;
using VisaApp.Domain.Entities;

namespace VisaApp.Application.Features.Countries.Command.UpdateCountry
{
    public class UpdateCountryCommandHandler : IRequestHandler<UpdateCountryCommandRequest, Unit>
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;

        public UpdateCountryCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
        }
        public async Task<Unit> Handle(UpdateCountryCommandRequest request, CancellationToken cancellationToken)
        {
            var country = await unitOfWork.GetReadRepository<Country>().GetAsync(x => x.Id ==  request.Id && !x.IsDeleted);
            
            var map = mapper.Map<Country,UpdateCountryCommandRequest>(request);

            var countryCategories = await unitOfWork.GetReadRepository<CountryCategory>()
                .GetAllAsync(x => x.CountryId == country.Id);

            await unitOfWork.GetWriteRepository<CountryCategory>()
                .HardDeleteRangeAsync(countryCategories);

            foreach (var categoryId in request.CategoryIds)
                await unitOfWork.GetWriteRepository<CountryCategory>()
                    .AddAsync(new() { CategoryId = categoryId, CountryId = country.Id });

            await unitOfWork.GetWriteRepository<Country>().UpdateAsync(map);
            await unitOfWork.SaveAsync();

            return Unit.Value;
        }
    }
}
