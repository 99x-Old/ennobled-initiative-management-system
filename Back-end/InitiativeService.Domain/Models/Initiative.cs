
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace InitiativeService.Models
{
    public class Initiative
    {
        public Initiative(string name, int initiativeYearId)
        {
            Name = name;
            InitiativeYearId = initiativeYearId;
        }

        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public List<InitiativeAction> InitiativeActions { get; set; }
        public int InitiativeYearId { get; set; }
        public InitiativeYear InitiativeYear { get; set; }

    }
}
