using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VisaApp.Domain.Common;

namespace VisaApp.Domain.Entities
{
    public class CountryCategory : EntityBase
    {
        public int CountryId { get; set; }
        public int CategoryId { get; set; }
        public Country Country { get; set; }
        public Category Category { get; set; }
    }
}
