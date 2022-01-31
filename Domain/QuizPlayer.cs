using System;

namespace Domain
{
    public class QuizPlayer
    {
        public string PlayerId {get;set;}
        public Player Player{get; set;}
        public Guid QuizId {get;set;}
        public Quiz Quiz {get; set;}
        public bool IsCreator {get;set;}
        public int score { get; set; }
    }
}