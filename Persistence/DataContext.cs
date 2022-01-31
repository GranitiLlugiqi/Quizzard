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
        
        public DbSet<QuizPlayer> QuizPlayers{get;set;}

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<QuizPlayer>(x => x.HasKey(qp => new {qp.PlayerId, qp.QuizId}));

            builder.Entity<QuizPlayer>()
            .HasOne(u => u.Player)
            .WithMany(q => q.Quizzes)
            .HasForeignKey(qp => qp.PlayerId);

             builder.Entity<QuizPlayer>()
            .HasOne(u => u.Quiz)
            .WithMany(q => q.Players)
            .HasForeignKey(qp => qp.QuizId);

            builder.Entity<Category>()
            .HasMany(c => c.Quizzes)
            .WithOne(e => e.Category);
           
           builder.Entity<Quiz>()
            .HasMany(c => c.Questions)
            .WithOne(e => e.Quiz);

            builder.Entity<Question>()
            .HasMany(c => c.Options)
            .WithOne(e => e.Question);


            
        }
    
        


    }
}