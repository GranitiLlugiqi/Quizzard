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
                    QuestionDescription="Who is the capital of Kosovo?",
                    Option1="Pristina",
                    Answer1= true,
                    Option2="Tirana",
                    Answer2 = false,
                    Option3="Madrid",
                    Answer3 = false,
                    Option4="London",
                    Answer4= false,
                   
                },
                 new Question
                {
                    QuestionDescription="Who is the capital of Albania?",
                     Option1="Belgrade",
                    Answer1= false,
                    Option2="Tirana",
                    Answer2= true,
                    Option3="Berlin",
                    Answer3= false,
                    Option4="Bern",
                    Answer4 = false,
                    
                },
                 new Question
                {
                   QuestionDescription="Who is the capital of France?",
                    Option1="Sofia",
                    Answer1= false,
                    Option3="Skopje",
                    Answer3= false,
                    Option4="Lisbona",
                    Answer4= false,
                    Option2="Paris",
                    Answer2= true,
                     
                },
                new Question
                {
                    QuestionDescription="How many planets are in our Solar System?",
                    Option1="5",
                    Answer1= false,
                    Option2="6",
                    Answer2= false,
                    Option3="9",
                    Answer3= true,
                    Option4="10",
                    Answer4= false,
                     
                },
                 new Question
                {
                    QuestionDescription="Which is the largest planet in our Solar System?",
                    Option1="Saturn",
                    Answer1= false,
                    Option2="Jupiter",
                    Answer2= true,
                    Option3="Pluto",
                    Answer3= false,
                    Option4="Neptun",
                    Answer4= false,
                     
                },
                 new Question
                {
                    QuestionDescription="What's the name of the satellite of planet Earth?",
                     Option1="Moon",
                    Answer1= true,
                    Option3="Venus",
                    Answer3= false,
                    Option2="Charon",
                    Answer2= false,
                    Option4="Mercury",
                    Answer4= false,
                    
                    
                }
            };
             await context.Questions.AddRangeAsync(questions);
             await context.SaveChangesAsync();
           
 
        }
    }
}