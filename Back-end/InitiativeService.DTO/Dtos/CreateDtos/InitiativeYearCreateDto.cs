using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace InitiativeService.Dtos.CreateDtos
{
    public class InitiativeYearCreateDto
    {

        [Required]
        public string Year { get; set; }
     
    }
}
