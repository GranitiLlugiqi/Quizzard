using System;
using System.Collections.Generic;

namespace Domain
{
    public class Question
    {
        public Guid Id { get; set; }
        public string Description { get; set; }
        public List<Option> Options {get;set;}

    }
}