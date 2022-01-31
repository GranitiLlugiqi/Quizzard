using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Application.Options;
using Microsoft.AspNetCore.Authorization;
using MediatR;

namespace API.Controllers
{
    [AllowAnonymous]
    public class OptionsController : BaseApiController
    {  
        
        [HttpGet]
        public async Task<ActionResult<List<Option>>> GetOptions()
        {
            return await Mediator.Send(new OptionList.Query());
        }
        
        [HttpGet("{id}")] // quizzes/id
        public async Task<ActionResult<Option>> GetOption(Guid id)
        {
            return await Mediator.Send(new OptionsDetails.Query{Id = id});
        }
        

        [HttpPost]
        public async Task<IActionResult> CreateOption(Option option)
        {
            return Ok(await Mediator.Send(new Create.Command {Option = option}));

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditOption(Guid id,Option option)
        {
            option.OptionId= id;
            return Ok(await Mediator.Send(new EditOption.Command{Option = option}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOption(Guid id)
        {
             return Ok(await Mediator.Send(new DeleteOption.Command{Id = id}));
        }

    }
}


