using System;

namespace Domain
{
    public class Option
    {
        public Guid OptionId { get; set; }
        public string Description{ get; set;}
        public bool Answer { get; set; }
        public Guid QuestionId{get;set;}
        public Question Question{get; set;}
    }
}