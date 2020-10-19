using InitiativeService.Models;
using System.Collections.Generic;

namespace InitiativeService.Data
{
    public interface IInitiativeYearRepository
    {
        bool SaveChanges();
        IEnumerable<InitiativeYear> GetInitiativeYears();
        InitiativeYear GetInitiativeYear(int id);
        void CreateInitiativeYear(InitiativeYear initiativeYear);
        void UpdateInitiativeYear(InitiativeYear initiativeYear);
        void DeleteInitiativeYear(InitiativeYear initiativeYear);


    }
}
