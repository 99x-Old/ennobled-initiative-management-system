using System;

namespace InitiativeService.Dtos.ReadDtos
{
    public class InitiativeActionReadDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }
        public string Comment { get; set; }
        public DateTime DeadLine { get; set; }
        public int Progress { get; set; }
    }
}
