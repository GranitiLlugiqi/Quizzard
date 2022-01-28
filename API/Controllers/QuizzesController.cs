using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class QuizzesController : BaseApiController
    {
        private readonly DataContext _context;
        public QuizzesController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Quiz>>> GetQuizzes()
        {
            return await _context.Quizzes.ToListAsync();
        }
        [HttpGet("{id}")] // quizzes/id
        public async Task<ActionResult<Quiz>> GetQuiz(Guid id)
        {
            return await _context.Quizzes.FindAsync(id);
        }
    }
}