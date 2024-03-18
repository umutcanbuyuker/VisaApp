using MediatR;
using VisaApp.Application.Interface.UnitOfWorks;
using VisaApp.Domain.Entities;

namespace VisaApp.Application.Features.Countries.Command.CreateCountry
{
    public class CreateCountryCommandHandler : IRequestHandler<CreateCountryCommandRequest, Unit>
    {
        private readonly IUnitOfWork unitOfWork;
        public CreateCountryCommandHandler(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }
        public async Task<Unit> Handle(CreateCountryCommandRequest request, CancellationToken cancellationToken)
        {
            Country country = new(request.Name, request.Flag);

            await unitOfWork.GetWriteRepository<Country>().AddAsync(country);
            if (await unitOfWork.SaveAsync() > 0)
            {
                foreach (var categoryId in request.CategoryIds)
                {
                    await unitOfWork.GetWriteRepository<CountryCategory>().AddAsync(new()
                    {
                        CountryId = country.Id,
                        CategoryId = categoryId
                    });
                }
                await unitOfWork.SaveAsync();
            }

            return Unit.Value;
        }
    }
}
