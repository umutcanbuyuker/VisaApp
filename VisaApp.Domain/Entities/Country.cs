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
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Category> Categories { get; set; }

    }
}
