using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using InitiativeService.Data;
using InitiativeService.Dtos.CreateDtos;
using InitiativeService.Models;

namespace InitiativeService.Services
{
    public class InitiativeService : IInitiativeService    
    {
        private readonly IInitiativeYearRepository _yearRepository;
        private readonly IInitiativeRepository _initiativeRepository;
        private readonly IMapper _mapper;

        public InitiativeService(IInitiativeYearRepository yearRepository, IMapper mapper, IInitiativeRepository initiativeRepository)
        {
            _yearRepository = yearRepository;
            _initiativeRepository = initiativeRepository;
            _mapper = mapper;
        }

        public Initiative GetInitiativeModel(InitiativeCreateDto initiativeCreateDto)
        {
            var initiativeYears = _yearRepository.GetInitiativeYears();
            var initiativeYearId = initiativeYears.FirstOrDefault(y =>
            {
                if (y == null) throw new ArgumentNullException(nameof(y));
                return y.Year == initiativeCreateDto.InitiativeYear;
            }).Id;

            return new Initiative(initiativeCreateDto.Name, initiativeYearId);
        }

        public IEnumerable<Initiative> GetInitiavesForGivenYear(string year)
        {
            var initiativeYears = _yearRepository.GetInitiativeYears();
            var initiativeYearId = initiativeYears.FirstOrDefault(y =>
            {
                if (y == null) throw new ArgumentNullException(nameof(y));
                return y.Year == year;
            }).Id;
            var initiatives = _initiativeRepository.GetInitiatives()
                .Where(i => i.InitiativeYearId == initiativeYearId).ToList();

            return initiatives;
        }
    }
}
