using InitiativeService.Models;
using System.Collections.Generic;

namespace InitiativeService.Data
{
    public interface IInitiativeRepository
    {
        bool SaveChanges();
        IEnumerable<Initiative> GetInitiatives();
        Initiative GetInitiative(int id);
        void CreateInitiative(Initiative initiative);
        void UpdateInitiative(Initiative initiative);
        void DeleteInitiative(Initiative initiative);

    }
}
