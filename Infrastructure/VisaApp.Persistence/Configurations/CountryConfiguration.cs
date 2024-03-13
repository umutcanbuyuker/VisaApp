using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VisaApp.Domain.Entities;

namespace VisaApp.Persistence.Configurations
{
    public class CountryConfiguration : IEntityTypeConfiguration<Country>
    {
        public void Configure(EntityTypeBuilder<Country> builder)
        {
            Country ulke1 = new()
            {
                Id = 1,
                Name = "X",
                Flag = "test",
                IsDeleted = false,
                CreatedDate = DateTime.Now,
            };

            Country ulke2 = new()
            {
                Id = 2,
                Name = "Y",
                Flag = "testy",
                IsDeleted = false,
                CreatedDate = DateTime.Now,
            };

            Country ulke3 = new()
            {
                Id = 3,
                Name = "Z",
                Flag = "Testz",
                IsDeleted = true,
                CreatedDate = DateTime.Now,
            };

            builder.HasData(ulke1, ulke2, ulke3);
        }
    }
}
