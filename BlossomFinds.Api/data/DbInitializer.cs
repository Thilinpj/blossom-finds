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
                    new Product { Id = 4, Name = "Soft Pouch Bag", Category = "Pouches", Price = 12.00, ImageUrl = "/images/pouch1.jpg" },
                    new Product { Id = 5, Name = "Lavender Scrunchie", Category = "Scrunchies", Price = 3.49, ImageUrl = "/images/scrunchie2.jpg" },
                    new Product { Id = 6, Name = "Polka Dot Scrunchie", Category = "Scrunchies", Price = 3.99, ImageUrl = "/images/scrunchie3.jpg" },
                    new Product { Id = 7, Name = "Pearl Clip", Category = "Clips", Price = 4.25, ImageUrl = "/images/clip2.jpg" },
                    new Product { Id = 8, Name = "Classic Black Clip", Category = "Clips", Price = 2.99, ImageUrl = "/images/clip3.jpg" },
                    new Product { Id = 9, Name = "Silk Head Scarf", Category = "Scarves", Price = 8.99, ImageUrl = "/images/scarf2.jpg" },
                    new Product { Id = 10, Name = "Retro Bandana", Category = "Scarves", Price = 6.49, ImageUrl = "/images/scarf3.jpg" },
                    new Product { Id = 11, Name = "Mini Pouch Set", Category = "Pouches", Price = 10.50, ImageUrl = "/images/pouch2.jpg" },
                    new Product { Id = 12, Name = "Floral Makeup Pouch", Category = "Pouches", Price = 14.00, ImageUrl = "/images/pouch3.jpg" }
                );

                //context.SaveChanges();
            }

            if (!context.Users.Any())
            {
                context.Users.Add(new User
                {
                    Username = "admin",
                    Password = "admin123", // Plain for now; hash later
                    Role = "Admin"
                });

                context.Users.Add(new User
                {
                    Username = "tilly",
                    Password = "user123",
                    Role = "User"
                });

                context.SaveChanges();
            }
        }
    }
}
