using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VisaApp.Application.Bases;

namespace VisaApp.Application.Features.Countries.Exceptions
{
    public class CountryNameMustNotBeSame : BaseException
    {
        public CountryNameMustNotBeSame() : base("Ülke ismi zaten var") { }
    }
}
