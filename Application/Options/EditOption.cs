using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Options
{
    public class EditOption
    {
        public class Command : IRequest
        {
            public Option Option { get; set; }

        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var option = await _context.Quizzes.FindAsync(request.Option.OptionId);

                _mapper.Map(request.Option, option);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}