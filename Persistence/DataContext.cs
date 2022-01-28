using Microsoft.EntityFrameworkCore;
using Domain;

namespace Persistence
{
    public class DataContext : DbContext
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