using System;
using System.Collections.Generic;
using System.Text;
using InitiativeService.Dtos;
using InitiativeService.Dtos.CreateDtos;
using InitiativeService.Models;

namespace InitiativeService.Services
{
    public interface IInitiativeService
    {
        public Initiative GetInitiativeModel(InitiativeCreateDto createDto);
        public IEnumerable<Initiative> GetInitiavesForGivenYear(string year);
    }
}
