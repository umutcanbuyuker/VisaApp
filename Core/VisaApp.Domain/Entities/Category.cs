using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VisaApp.Domain.Common;

namespace VisaApp.Domain.Entities
{
    public class Category : EntityBase
    {
        public string Name { get; set; }
        public ICollection<CountryCategory> CountryCategories { get; set; }


    }
}
