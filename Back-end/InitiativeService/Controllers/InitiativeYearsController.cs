using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using InitiativeService.Data;
using InitiativeService.Dtos;
using InitiativeService.Dtos.CreateDtos;
using InitiativeService.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace InitiativeService.Controllers
{
    [Route("api/initiativeYears")]
    [ApiController]
    public class InitiativeYearsController : ControllerBase
    {
        private readonly IInitiativeYearRepository _repository;
        private readonly IMapper _mapper;

        public InitiativeYearsController(IInitiativeYearRepository repository , IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        // GET: api/<InitiativeYearController>
        [HttpGet]
        public ActionResult <IEnumerable<InitiativeYearReadDto>> Get()
        {
            var initiativeYears = _repository.GetInitiativeYears();
            return Ok(_mapper.Map<IEnumerable<InitiativeYearReadDto>>(initiativeYears));
                
        }

        // GET api/<InitiativeYearController>/5
        [HttpGet("{id}", Name = "GetInitiativeYearById")]
        public ActionResult <InitiativeYearReadDto> GetInitiativeYearById(int id)
        {
            var initiativeYear = _repository.GetInitiativeYear(id);
            if(initiativeYear != null)
                return Ok(_mapper.Map<InitiativeYearReadDto>(initiativeYear));
            return NotFound();
        }

        // POST api/<InitiativeYearController>
        [HttpPost]
        public ActionResult<InitiativeYearReadDto> Post(InitiativeYearCreateDto initiativeYearCreateDto)
        {
            var initiativeYearModel = _mapper.Map<InitiativeYear>(initiativeYearCreateDto);
            _repository.CreateInitiativeYear(initiativeYearModel);
            _repository.SaveChanges();

            var initiativeYearReadDto = _mapper.Map<InitiativeYearReadDto>(initiativeYearModel);

            return CreatedAtRoute(nameof(GetInitiativeYearById), new { Id = initiativeYearReadDto.Id }, initiativeYearReadDto);
            
        }

        // PUT api/<InitiativeYearController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, InitiativeYearCreateDto initiativeYearCreateDto)
        {
            var initiativeYearFromRepo = _repository.GetInitiativeYear(id);
            if (initiativeYearFromRepo == null)
                return NotFound();

            _mapper.Map(initiativeYearCreateDto, initiativeYearFromRepo);
            _repository.UpdateInitiativeYear(initiativeYearFromRepo);
            _repository.SaveChanges();
            return NoContent();
        }

        // DELETE api/<InitiativeYearController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var initiativeYearFromRepo = _repository.GetInitiativeYear(id);
            if (initiativeYearFromRepo == null)
                return NotFound();

            _repository.DeleteInitiativeYear(initiativeYearFromRepo);
            _repository.SaveChanges();
            return NoContent();
        }
    }
}
