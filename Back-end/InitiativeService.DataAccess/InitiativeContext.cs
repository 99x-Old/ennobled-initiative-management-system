using InitiativeService.Models;
using Microsoft.EntityFrameworkCore;

namespace InitiativeService.Data
{
    public class InitiativeContext : DbContext
    {
        public InitiativeContext(DbContextOptions<InitiativeContext> opt) : base(opt)
        {

        }

        public DbSet<Initiative> Initiatives { get; set; }
        public DbSet<InitiativeYear> InitiativeYear { get; set; }
        public DbSet<InitiativeAction> InitiativeAction { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Initiative>()
                .HasIndex(i => i.Name)
                .IsUnique();

            builder.Entity<InitiativeYear>().HasIndex(y => y.Year).IsUnique();
        }
    }
}
