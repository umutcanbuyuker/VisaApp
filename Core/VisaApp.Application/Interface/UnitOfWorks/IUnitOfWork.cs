using VisaApp.Application.Interface.Repositories;
using VisaApp.Domain.Common;

namespace VisaApp.Application.Interface.UnitOfWorks
{
    public interface IUnitOfWork : IAsyncDisposable
    {
        IReadRepository<T> GetReadReadRepository<T>() where T : class, IEntityBase ,new ();
        IWriteRepository<T> GetWriteRepository<T>() where T : class, IEntityBase ,new ();
        Task<int> SaveAsync();
        int Save();
    }
}
