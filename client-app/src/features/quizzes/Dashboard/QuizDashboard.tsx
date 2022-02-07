import { Grid, GridColumn} from "semantic-ui-react";
import React from 'react';
import { Question, Quiz } from '../../../app/models/quiz';
import QuizList from "./QuizList";
import QuizForm from "../form/QuizForm";
import QuizDetails from "../../details/QuizDetails";


interface Props{
    quizzes:Quiz[];
    selectedQuiz: Quiz | undefined;
    selectQuiz: (id: number) => void;
    cancelSelectQuiz:() => void;
    question:Question[];
    createMode: boolean;
    openForm: (id:number) => void;
    closeForm: ()=> void;
}
export default function QuizDashboard({quizzes , selectQuiz,selectedQuiz,
cancelSelectQuiz, createMode, closeForm,openForm}:Props){
    return(
        <Grid >
             <GridColumn width='6' >
             
             <QuizList quizzes={quizzes} selectQuiz={selectQuiz}/>
             </GridColumn>
             <GridColumn width='10'>
             {createMode &&
                 <QuizForm 
                 closeForm={closeForm}
                 
                 />}
                 {selectedQuiz && !createMode &&
                 <QuizDetails 
                 quiz={selectedQuiz} 
                 cancelSelectQuiz={cancelSelectQuiz}

                  />}
             </GridColumn>
             </Grid>
    )
}