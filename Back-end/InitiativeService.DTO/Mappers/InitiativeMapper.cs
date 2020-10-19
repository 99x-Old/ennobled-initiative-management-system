using AutoMapper;
using InitiativeService.Dtos;
using InitiativeService.Dtos.CreateDtos;
using InitiativeService.Models;
using InitiativeService.Dtos.ReadDtos;

namespace InitiativeService.DTO.Mappers
{
    public class InitiativeMapper : Profile
    {
        public InitiativeMapper()
        {
            CreateMap<InitiativeAction, InitiativeActionReadDto>();
            CreateMap<InitiativeActionCreateDto, InitiativeAction>();
            CreateMap<Initiative, InitiativeReadDto>();
            CreateMap<InitiativeReadDto, Initiative>();
            CreateMap<InitiativeCreateDto, Initiative>();
            CreateMap<InitiativeYear, InitiativeYearReadDto>();
            CreateMap<InitiativeYearCreateDto, InitiativeYear>();
        }     
    }
}
