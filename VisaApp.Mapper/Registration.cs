using Microsoft.Extensions.DependencyInjection;
using VisaApp.Application.Interface.AutoMapper;

namespace VisaApp.Mapper
{
    public static class Registration
    {
        public static void AddCustomMapper(this IServiceCollection services)
        {
            services.AddSingleton<IMapper, AutoMapper.Mapper>();
        }
    }
}
