using MediatR;
using VisaApp.Application.Interface.UnitOfWorks;
using VisaApp.Domain.Entities;

namespace VisaApp.Application.Features.Countries.Command.DeleteCountry
{
    public class DeleteCountryCommandHandler : IRequestHandler<DeleteCountryCommandRequest>
    {
        private readonly IUnitOfWork unitOfWork;

        public DeleteCountryCommandHandler(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }
        public async Task Handle(DeleteCountryCommandRequest request, CancellationToken cancellationToken)
        {
            var country = await unitOfWork.GetReadRepository<Country>().GetAsync(x => x.Id == request.Id && !x.IsDeleted);
            country.IsDeleted = true;

            await unitOfWork.GetWriteRepository<Country>().UpdateAsync(country);
            await unitOfWork.SaveAsync();
        }
    }
}
