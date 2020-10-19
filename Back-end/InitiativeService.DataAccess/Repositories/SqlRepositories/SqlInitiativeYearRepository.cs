using InitiativeService.Models;
using System.Collections.Generic;
using System.Linq;
using System;

namespace InitiativeService.Data
{
    public class SqlInitiativeYearRepository : IInitiativeYearRepository
    {
        private readonly InitiativeContext _context;

        public SqlInitiativeYearRepository(InitiativeContext context)
        {
            _context = context;
        }

        public void CreateInitiativeYear(InitiativeYear initiativeYear)
        {
            if (initiativeYear == null)
                throw  new ArgumentNullException(nameof(initiativeYear));
            _context.InitiativeYear.Add(initiativeYear);
        }

        public void DeleteInitiativeYear(InitiativeYear initiativeYear)
        {
            if (initiativeYear == null)
                throw new ArgumentNullException(nameof(initiativeYear));
            _context.InitiativeYear.Remove(initiativeYear);
        }

        public InitiativeYear GetInitiativeYear(int id)
        {
            return _context.InitiativeYear.FirstOrDefault(y => y.Id == id);
        }

        public IEnumerable<InitiativeYear> GetInitiativeYears()
        {
            return _context.InitiativeYear.ToList();

        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void UpdateInitiativeYear(InitiativeYear initiativeYear)
        {
            //Nothing
        }
    }
}
