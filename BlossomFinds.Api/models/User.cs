namespace BlossomFinds.Api.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty; // We'll store hashed passwords later
        public string Role { get; set; } = "User"; // Default role is "User"
    }
}
