using System.ComponentModel.DataAnnotations;

namespace InitiativeService.Dtos.CreateDtos
{
    public class InitiativeCreateDto
    {
        [Required]
        public string Name { get; set; }
        public string InitiativeYear { get; set; }
    }
}
