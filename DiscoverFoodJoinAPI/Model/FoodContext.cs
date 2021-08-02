using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace DiscoverFoodJoinAPI.Model
{
    public partial class FoodContext : DbContext
    {
        public FoodContext()
        {
        }

        public FoodContext(DbContextOptions<FoodContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TblCity> TblCities { get; set; }
        public virtual DbSet<TblFoodJoint> TblFoodJoints { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS;Database=DiscoverFoodJoint;UID=sa;PWD=rmserver_123;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<TblCity>(entity =>
            {
                entity.Property(e => e.CityName).IsUnicode(false);

                entity.Property(e => e.Country).IsUnicode(false);

                entity.Property(e => e.State).IsUnicode(false);
            });

            modelBuilder.Entity<TblFoodJoint>(entity =>
            {
                entity.Property(e => e.Address).IsUnicode(false);

                entity.Property(e => e.FoodType).IsUnicode(false);

                entity.Property(e => e.JointName).IsUnicode(false);

                entity.HasOne(d => d.City)
                    .WithMany(p => p.TblFoodJoints)
                    .HasForeignKey(d => d.CityId)
                    .HasConstraintName("FK_tblCity_tblFoodJoint");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
