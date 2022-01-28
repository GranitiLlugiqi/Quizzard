using System;
using  System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
namespace Persistence.Seed
{
    public class CategorySeed
    {
        public static async Task SeedData(DataContext context)
        {
            if(context.Categories.Any()) return;
            
            var categories = new List<Category>
            {
                new Category
                {
                    Name="Math"
                },
                 new Category
                {
                    Name="Astronomy"
                },
                 new Category
                {
                    Name="Geography"
                },
                new Category
                {
                    Name="Biology"
                },
                 new Category
                {
                   Name="Physics"
                },
                 new Category
                {
                    Name="Tech"
                }
            };
             await context.Categories.AddRangeAsync(categories);
                await context.SaveChangesAsync();

        }
    }
}