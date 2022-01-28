using System;
using  System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
namespace Persistence.Seed
{
    public class QuestionSeed
    {
        public static async Task SeedData(DataContext context)
        {
            if(context.Questions.Any()) return;
            
            var questions = new List<Question>
            {
                new Question
                {
                    Description="Who is the capital of Kosovo?",
                },
                 new Question
                {
                    Description="Who is the capital of Albania?",
                },
                 new Question
                {
                    Description="Who is the capital of France?",
                },
                new Question
                {
                    Description="How many planets are in our Solar System?",
                },
                 new Question
                {
                    Description="Which is the largest planet in our Solar System?",
                },
                 new Question
                {
                    Description="What's the name of the satellite of planet Earth?",
                }
            };
             await context.Questions.AddRangeAsync(questions);
                await context.SaveChangesAsync();

        }
    }
}