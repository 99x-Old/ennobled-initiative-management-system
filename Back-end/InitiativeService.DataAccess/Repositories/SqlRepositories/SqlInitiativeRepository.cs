using InitiativeService.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace InitiativeService.Data
{
    public class SqlInitiativeRepository : IInitiativeRepository
    {
        private readonly InitiativeContext _context;

        public SqlInitiativeRepository(InitiativeContext context)
        {
            _context = context;
        }

        public void CreateInitiative(Initiative initiative)
        {
            if (initiative == null)
                throw new ArgumentNullException(nameof(initiative));
            _context.Initiatives.Add(initiative);
        }

        public void DeleteInitiative(Initiative initiative)
        {
            if (initiative == null)
                throw new ArgumentNullException(nameof(initiative));
            _context.Initiatives.Remove(initiative);
        }

        public Initiative GetInitiative(int id)
        {
            return _context.Initiatives.FirstOrDefault(i => i.Id == id);
        }

        public IEnumerable<Initiative> GetInitiatives()
        {
            return _context.Initiatives.ToList();
        }

        public bool SaveChanges()
        {
           return (_context.SaveChanges() >= 0);
        }

        public void UpdateInitiative(Initiative initiative)
        {
            //Nothing
        }
    }
}
