using System.Collections.Generic;
using AutoMapper;
using InitiativeService.Data;
using InitiativeService.Dtos.CreateDtos;
using InitiativeService.Dtos.ReadDtos;
using InitiativeService.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace InitiativeService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InitiativeActionsController : ControllerBase
    {
        private readonly IInitiativeActionRepository _repository;
        private readonly IMapper _mapper;

        public InitiativeActionsController(IInitiativeActionRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        // GET: api/<InitiativeActionController>
        [HttpGet]
        public ActionResult<IEnumerable<InitiativeActionReadDto>>  Get()
        {
            var initiativeActions = _repository.GetInitiativeActions();
            return Ok(_mapper.Map<IEnumerable<InitiativeActionReadDto>>(initiativeActions));
        }

        // GET api/<InitiativeActionController>/5
        [HttpGet("{id}", Name = "GetInitiativeActionById")]
        public ActionResult<InitiativeActionReadDto> GetInitiativeActionById(int id)
        {
            var initiativeAction = _repository.GetInitiativeAction(id);
            if (initiativeAction != null)
                return Ok(_mapper.Map<InitiativeActionReadDto>(initiativeAction));
            return NotFound();
        }

        // POST api/<InitiativeActionController>
        [HttpPost]
        public ActionResult<InitiativeActionReadDto> Post(InitiativeActionCreateDto initiativeActionCreateDto)
        {
            var initiativeActionModel = _mapper.Map<InitiativeAction>(initiativeActionCreateDto);
            _repository.CreateInitiativeAction(initiativeActionModel);
            _repository.SaveChanges();

            var initiativeActionReadDto = _mapper.Map<InitiativeActionReadDto>(initiativeActionModel);
            return CreatedAtRoute(nameof(GetInitiativeActionById), new { Id = initiativeActionReadDto.Id }, initiativeActionReadDto);
        }

        // PUT api/<InitiativeActionController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, InitiativeActionCreateDto initiativeActionCreateDto)
        {
            var initiativeActionFromRepo = _repository.GetInitiativeAction(id);
            if (initiativeActionFromRepo == null)
                return NotFound();

            _mapper.Map(initiativeActionCreateDto, initiativeActionFromRepo);
            _repository.UpdateInitiativeAction(initiativeActionFromRepo);
            _repository.SaveChanges();
            return NoContent();
        }

        // DELETE api/<InitiativeActionController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var initiativeActionFromRepo = _repository.GetInitiativeAction(id);
            if (initiativeActionFromRepo == null)
                return NotFound();

            _repository.DeleteInitiativeAction(initiativeActionFromRepo);
            _repository.SaveChanges();
            return NoContent();
        }
    }
}
