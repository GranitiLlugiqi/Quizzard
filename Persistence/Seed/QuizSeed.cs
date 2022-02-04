using System;
using  System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence.Seed
{
    public class QuizSeed
    {
        public static async Task SeedData(DataContext context, UserManager<Player> userManager)
        {
            if(!userManager.Users.Any())
            {
                var users = new List<Player>
                {
                    new Player{DisplayName = "Arton", UserName = "arton", Email = "arton@test.com"},
                    new Player{DisplayName = "Linda", UserName = "linda", Email = "linda@test.com"},
                    new Player{DisplayName = "Ben", UserName = "ben", Email = "ben@test.com"},
                    new Player{DisplayName = "Tom", UserName = "tom", Email = "tom@test.com"},

                };
                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }
            
            if(context.Quizzes.Any()) return;
            
            var quizzes = new List<Quiz>
            {
                new Quiz
                {
                    Id=1,
                    Title="Capitals of Europe Countries",
                    Description="Test your knowledge of how well you know European Countries",
                    Picture="geography",	
                    
                },
                new Quiz
                {
                    Id=2,
                    Title="The Solar System",
                    Description="How well do you know what lays in our Solar System?",
                    Picture="astronomy",
                   
                }
            };
        await context.Quizzes.AddRangeAsync(quizzes);
        await context.SaveChangesAsync();
                

        }
    }
}