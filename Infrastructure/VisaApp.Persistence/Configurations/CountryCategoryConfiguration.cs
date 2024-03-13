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
    public class CountryCategoryConfiguration : IEntityTypeConfiguration<CountryCategory>
    {
        public void Configure(EntityTypeBuilder<CountryCategory> builder)
        {
            builder.HasKey(x => new { x.CountryId, x.CategoryId });

            builder.HasOne(c => c.Country)
                .WithMany(pc => pc.CountryCategories)
                .HasForeignKey(c => c.CountryId).OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(c => c.Category)
                .WithMany(pc => pc.CountryCategories)
                .HasForeignKey(c => c.CategoryId).OnDelete(DeleteBehavior.Cascade);
        }
    }
}
