using Microsoft.EntityFrameworkCore;
using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<Player>
    {
        public DataContext( DbContextOptions options) : base(options)
        {
        }

        public DbSet<Quiz> Quizzes{get;set;}
        public DbSet<Question> Questions{get;set;}
        public DbSet<Option> Options{get;set;}
        public DbSet<Category> Categories{get;set;}
    }
}