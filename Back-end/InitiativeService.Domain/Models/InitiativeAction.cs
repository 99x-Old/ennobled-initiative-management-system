using System;
using System.ComponentModel.DataAnnotations;

namespace InitiativeService.Models
{
    public class InitiativeAction
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Status { get; set; }
        public string Comment { get; set; }
        public DateTime DeadLine  { get; set; }
        public int Progress { get; set; }
        public int InitiativeId { get; set; }
        public Initiative Initiative { get; set; }
    }
}
