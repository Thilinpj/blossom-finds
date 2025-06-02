using Microsoft.AspNetCore.Mvc;
using BlossomFinds.Api.Models;
using BlossomFinds.Api.Data;

namespace BlossomFinds.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User loginUser)
        {
            var user = _context.Users.FirstOrDefault(u =>
                u.Username == loginUser.Username && u.Password == loginUser.Password);

            if (user == null)
            {
                return Unauthorized(new { message = "Invalid credentials" });
            }

            return Ok(new
            {
                username = user.Username,
                role = user.Role
            });
        }
    }
}
