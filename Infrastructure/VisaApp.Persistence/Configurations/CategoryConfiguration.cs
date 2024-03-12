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
    public class CategoryConfiguration : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.Property(x => x.Name).HasMaxLength(256);

            Category kategori1 = new()
            {
                Id = 1,
                Name = "A",
            };

            Category kategori2 = new()
            {
                Id = 2,
                Name = "B",
            };

            Category kategori3 = new()
            {
                Id = 3,
                Name = "C",
                IsDeleted = true,
            };

            builder.HasData(kategori1,kategori2,kategori3);
        }
    }
}
