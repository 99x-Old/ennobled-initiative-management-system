using InitiativeService.Models;
using System.Collections.Generic;

namespace InitiativeService.Data
{
    public interface IInitiativeActionRepository
    {
        bool SaveChanges();
        IEnumerable<InitiativeAction> GetInitiativeActions();
        InitiativeAction GetInitiativeAction(int id);
        void CreateInitiativeAction(InitiativeAction initiativeAction);
        void UpdateInitiativeAction(InitiativeAction initiativeAction);
        void DeleteInitiativeAction(InitiativeAction initiativeAction);
    }
}
