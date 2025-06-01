using BlossomFinds.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace BlossomFinds.Api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
    }
}
