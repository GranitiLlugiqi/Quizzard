using System;
using  System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
namespace Persistence.Seed
{
    public class OptionSeed
    {
        public static async Task SeedData(DataContext context)
        {
            if(context.Options.Any()) return;
            
            var options = new List<Option>
            {
                new Option
                {
                    Description="Pristina",
                    Answer = true,
                },
                new Option
                {
                    Description="Tirana",
                    Answer = false,
                },
                new Option
                {
                    Description="Madrid",
                    Answer = false,
                },
                new Option
                {
                    Description="London",
                    Answer = false,
                },
                
                new Option
                {
                    Description="Belgrade",
                    Answer = false,
                },
                new Option
                {
                    Description="Tirana",
                    Answer = true,
                },
                new Option
                {
                    Description="Berlin",
                    Answer = false,
                },
                new Option
                {
                    Description="Bern",
                    Answer = false,
                },
                
                new Option
                {
                    Description="Sofia",
                    Answer = false,
                },
                new Option
                {
                    Description="Skopje",
                    Answer = false,
                },
                new Option
                {
                    Description="Lisbona",
                    Answer = false,
                },
                new Option
                {
                    Description="Paris",
                    Answer = true,
                },
               
                new Option
                {
                    Description="5",
                    Answer = false,
                },
                new Option
                {
                    Description="6",
                    Answer = false,
                },
                new Option
                {
                    Description="9",
                    Answer = true,
                },
                new Option
                {
                    Description="10",
                    Answer = false,
                },
                 
                new Option
                {
                    Description="Saturn",
                    Answer = false,
                },
                new Option
                {
                    Description="Jupiter",
                    Answer = true,
                },
                new Option
                {
                    Description="Pluto",
                    Answer = false,
                },
                new Option
                {
                    Description="Neptun",
                    Answer = false,
                },
                
                new Option
                {
                    Description="Moon",
                    Answer = true,
                },
                new Option
                {
                    Description="Venus",
                    Answer = false,
                },
                new Option
                {
                    Description="Charon",
                    Answer = false,
                },
                new Option
                {
                    Description="Mercury",
                    Answer = false,
                },
            };
             await context.Options.AddRangeAsync(options);
                await context.SaveChangesAsync();

        }
    }
}