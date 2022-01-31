using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Options
{
    public class OptionsDetails
    {
        public class Query : IRequest<Option>
        {
          public Guid Id {get; set;}
           
        }

        public class Handler : IRequestHandler<Query, Option>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Option> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Options.FindAsync(request.Id);
            }
        }
    }
}