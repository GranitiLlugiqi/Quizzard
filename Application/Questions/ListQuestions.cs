using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Questions
{
    public class ListQuestions
    {
        public class Query : IRequest<List<Question>> {}

        public class Handler : IRequestHandler<Query, List<Question>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<List<Question>> Handle(Query request, CancellationToken cancellationToken)
            {
               return await _context.Questions.ToListAsync();
            }
        }
    }
}