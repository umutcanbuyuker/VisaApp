using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VisaApp.Domain.Common;

namespace VisaApp.Domain.Entities
{
    public class Country : EntityBase
    {
        public Country()
        {
            
        }

        public Country(string name, string flag)
        {
            Name = name;
            Flag = flag;
        }
        public string Name { get; set; }
        public string Flag { get; set; }
        public ICollection<CountryCategory> CountryCategories { get; set; }

    }
}
