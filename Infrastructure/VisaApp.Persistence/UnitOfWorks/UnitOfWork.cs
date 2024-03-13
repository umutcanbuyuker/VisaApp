using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VisaApp.Application.Interface.Repositories;
using VisaApp.Application.Interface.UnitOfWorks;
using VisaApp.Persistence.Context;
using VisaApp.Persistence.Repositories;

namespace VisaApp.Persistence.UnitOfWorks
{
    internal class UnitOfWork : IUnitOfWork
    {
        private readonly AppDbContext dbContext;
        public UnitOfWork(AppDbContext dbContext)
        {
              this.dbContext = dbContext;
        }
        public async ValueTask DisposeAsync() => await dbContext.DisposeAsync();

        public async Task<int> SaveAsync() => await dbContext.SaveChangesAsync();

        public int Save() => dbContext.SaveChanges();

        IReadRepository<T> IUnitOfWork.GetReadRepository<T>() => new ReadRepository<T>(dbContext);

        IWriteRepository<T> IUnitOfWork.GetWriteRepository<T>() => new WriteRepository<T>(dbContext);
    }
}
