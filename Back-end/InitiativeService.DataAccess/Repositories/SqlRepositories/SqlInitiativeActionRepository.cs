using InitiativeService.Models;
using System;
using System.Collections.Generic;
using System.Linq;


namespace InitiativeService.Data
{
    public class SqlInitiativeActionRepository : IInitiativeActionRepository
    {
        private readonly InitiativeContext _context;

        public SqlInitiativeActionRepository(InitiativeContext context)
        {
            _context = context;
        }
        public void CreateInitiativeAction(InitiativeAction initiativeAction)
        {
            if (initiativeAction == null)
                throw new ArgumentNullException(nameof(initiativeAction));
            _context.InitiativeAction.Add(initiativeAction);
        }

        public void DeleteInitiativeAction(InitiativeAction initiativeAction)
        {
            if (initiativeAction == null)
                throw new ArgumentNullException(nameof(initiativeAction));
            _context.InitiativeAction.Remove(initiativeAction);
        }

        public InitiativeAction GetInitiativeAction(int id)
        {
            return _context.InitiativeAction.FirstOrDefault(a => a.Id == id);
        }

        public IEnumerable<InitiativeAction> GetInitiativeActions()
        {
            return _context.InitiativeAction.ToList();
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void UpdateInitiativeAction(InitiativeAction initiativeAction)
        {
            //Nothing
        }
    }
}
