using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Questions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Domain;
using System;

namespace API.Controllers
{
    public class QuestionsController : BaseApiController
    {
        [AllowAnonymous]
        [HttpGet]

        public async Task<ActionResult<List<Question>>> GetQuestions()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Question>> GetQuestion(Guid id)
        {
            return await Mediator.Send(new QuestionDetails.Query{Id=id});
        }
    }

}