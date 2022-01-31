using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Options
{
    public class OptionList
    {
        public class Query : IRequest<List<Option>> {}

        public class Handler : IRequestHandler<Query, List<Option>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<List<Option>> Handle(Query request, CancellationToken cancellationToken)
            {
               return await _context.Options.ToListAsync();
            }
        }
    }
}