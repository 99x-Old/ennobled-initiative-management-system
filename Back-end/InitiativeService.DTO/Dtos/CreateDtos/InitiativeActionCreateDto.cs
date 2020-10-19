using System;
using System.ComponentModel.DataAnnotations;

namespace InitiativeService.Dtos.CreateDtos
{
    public class InitiativeActionCreateDto
    {
        [Required]
        public string Name { get; set; }
        public string Status { get; set; }
        public string Comment { get; set; }
        public DateTime DeadLine { get; set; }
        public int Progress { get; set; }
        public int InitiativeId { get; set; }
    }
}
