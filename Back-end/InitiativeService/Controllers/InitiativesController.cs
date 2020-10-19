using System.Collections.Generic;
using AutoMapper;
using InitiativeService.Data;
using InitiativeService.Dtos;
using InitiativeService.Dtos.CreateDtos;
using InitiativeService.Models;
using InitiativeService.Services;
using Microsoft.AspNetCore.Mvc;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace InitiativeService.Controllers 
{
    [Route("api/initiatives")]
    [ApiController]
    public class InitiativesController : ControllerBase
    {
        private readonly IInitiativeRepository _repository;
        private readonly IMapper _mapper;
        private readonly IInitiativeService _service;

        public InitiativesController(IInitiativeRepository repository , IMapper mapper, IInitiativeService service)
        {
            _repository = repository;
            _mapper = mapper;
            _service = service;
        }

        // GET: api/<InitiativeController>
        [HttpGet]
        public ActionResult<IEnumerable<InitiativeReadDto>> Get(string year)
        {
            var initiatives = _service.GetInitiavesForGivenYear(year);
            return Ok(_mapper.Map<IEnumerable<InitiativeReadDto>>(initiatives));
        }

        // GET api/<InitiativeController>/5
        [HttpGet("{id}" , Name = "GetInitiativeById")]
        public ActionResult<InitiativeReadDto> GetInitiativeById(int id)
        {
            var initiative = _repository.GetInitiative(id);
            if (initiative != null)
                return Ok(_mapper.Map<InitiativeReadDto>(initiative));
            return NotFound();
        }

        // POST api/<InitiativeController>
        [HttpPost]
        public ActionResult<InitiativeReadDto> Post(InitiativeCreateDto initiativeCreateDto)
        {
            var initiativeModel = _service.GetInitiativeModel(initiativeCreateDto);
            _repository.CreateInitiative(initiativeModel);
            _repository.SaveChanges();

            var initiativeReadDto = _mapper.Map<InitiativeReadDto>(initiativeModel);
            return CreatedAtRoute(nameof(GetInitiativeById), new { Id = initiativeReadDto.Id }, initiativeReadDto);

        }

        // PUT api/<InitiativeController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, InitiativeCreateDto initiativeCreateDto)
        {
            var initiativeFromRepo = _repository.GetInitiative(id);
            if (initiativeFromRepo == null)
                return NotFound();

            _mapper.Map(initiativeCreateDto, initiativeFromRepo);
            _repository.UpdateInitiative(initiativeFromRepo);
            _repository.SaveChanges();
            return NoContent();
        }

        // DELETE api/<InitiativeController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var initiativeFromRepo = _repository.GetInitiative(id);
            if (initiativeFromRepo == null)
                return NotFound();

            _repository.DeleteInitiative(initiativeFromRepo);
            _repository.SaveChanges();
            return NoContent();
        }
    }
}
