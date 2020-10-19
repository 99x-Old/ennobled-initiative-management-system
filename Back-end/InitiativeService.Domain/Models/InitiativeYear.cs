using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace InitiativeService.Models
{
    public class InitiativeYear
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string  Year { get; set; }
        public List<Initiative> Initiatives { get; set; }
    }
}
