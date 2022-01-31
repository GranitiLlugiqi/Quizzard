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
                    Title="Capitals of Europe Countries",
                    Description="Test your knowledge of how well you know European Countries",
                    CategoryId= new("7AFCFB11-1CAE-4332-8D7E-277F3F00E7A6"),	
                },
                new Quiz
                {
                    Title="The Solar System",
                    Description="How well do you know what lays in our Solar System?",
                    CategoryId= new("4DFD6A67-3B5F-4F54-9655-A1AB6FBF6C47"),
                }
            };
                await context.Quizzes.AddRangeAsync(quizzes);
                await context.SaveChangesAsync();

        }
    }
}