using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class UserFriend
    {
        [Key]
        public int Id { get; set; } // Primary Key for the join table

        [ForeignKey("UserId")]
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }

        [ForeignKey("FriendId")]
        public string FriendId { get; set; }
        public ApplicationUser Friend { get; set; }
    }
}