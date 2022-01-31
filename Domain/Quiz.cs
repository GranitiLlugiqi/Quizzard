using System;
using System.Collections.Generic;

namespace Domain
{
    public class Quiz
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description {get;set;}
        
        public ICollection<QuizPlayer> Players {get;set;}
        public List<Question> Questions {get;set;}

        public Guid CategoryId{get;set;}

        public Category Category{get; set;}

    }
}