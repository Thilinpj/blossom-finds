using BlossomFinds.Api.Models;

namespace BlossomFinds.Api.Data
{
    public static class DbInitializer
    {
        public static void Seed(IApplicationBuilder app)
        {
            using var scope = app.ApplicationServices.CreateScope();
            var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();

            context.Database.EnsureCreated();

            if (!context.Products.Any())
            {
                context.Products.AddRange(
                    new Product { Id = 1, Name = "Silky Pink Scrunchie", Category = "Scrunchies", Price = 2.99, ImageUrl = "/images/scrunchie1.jpg" },
                    new Product { Id = 2, Name = "Velvet Hair Clip", Category = "Clips", Price = 3.49, ImageUrl = "/images/clip1.jpg" },
                    new Product { Id = 3, Name = "Floral Scarf", Category = "Scarves", Price = 7.99, ImageUrl = "/images/scarf1.jpg" },
                    new Product { Id = 4, Name = "Soft Pouch Bag", Category = "Pouches", Price = 12.00, ImageUrl = "/images/pouch1.jpg" }
                );

                context.SaveChanges();
            }
        }
    }
}
