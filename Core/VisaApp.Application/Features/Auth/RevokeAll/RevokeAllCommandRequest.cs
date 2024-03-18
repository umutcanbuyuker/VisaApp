using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VisaApp.Application.Features.Auth.RevokeAll
{
    public class RevokeAllCommandRequest : IRequest<Unit>
    {
    }
}
