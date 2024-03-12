using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VisaApp.Application.Features.Countries.Queries.GetAllCountries;

namespace VisaApp.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CountryController : ControllerBase
    {
        private readonly IMediator mediator;
        public CountryController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCountries()
        {
            var response = await mediator.Send(new GetAllCountriesQueryRequest());

            return Ok(response);
        }
    }
}
