using VisaApp.Application.DTOs;

namespace VisaApp.Application.Features.Countries.Queries.GetAllCountries
{
    public class GetAllCountriesQueryResponse
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Flag { get; set; }
        public CategoryDto Category { get; set; }
    }
}
