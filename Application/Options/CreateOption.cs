using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using static Application.Quizzes.Create;

namespace Application.Options
{
    public class Create
    {
        public class Command : IRequest
        {
        public Option Option { get; set; }
        }
    

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
            _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
            _context.Options.Add(request.Option);

             await _context.SaveChangesAsync();

             return Unit.Value;
            }
        }
    }
}