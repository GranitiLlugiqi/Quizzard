using System;
using  System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
namespace Persistence.Seed
{
    public class QuizSeed
    {
        public static async Task SeedData(DataContext context)
        {
            if(context.Quizzes.Any()) return;
            
            var quizzes = new List<Quiz>
            {
                new Quiz
                {
                    Title="Capitals of Europe Countries",
                    Description="Test your knowledge of how well you know European Countries",
                },
                new Quiz
                {
                    Title="The Solar System",
                    Description="How well do you know what lays in our Solar System?",
                }
            };
                await context.Quizzes.AddRangeAsync(quizzes);
                await context.SaveChangesAsync();

        }
    }
}