using MediatR;
using Microsoft.AspNetCore.Mvc;
using VisaApp.Application.Features.Countries.Command.CreateCountry;
using VisaApp.Application.Features.Countries.Command.DeleteCountry;
using VisaApp.Application.Features.Countries.Command.UpdateCountry;
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

        [HttpPost]
        public async Task<IActionResult> CreateCountry(CreateCountryCommandRequest request)
        {
            await mediator.Send(request);
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> UpdateCountry(UpdateCountryCommandRequest request)
        {
            await mediator.Send(request);
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> DeleteCountry(DeleteCountryCommandRequest request)
        {
            await mediator.Send(request);
            return Ok();
        }
    }
}
