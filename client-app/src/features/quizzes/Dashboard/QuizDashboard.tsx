import { Grid } from "semantic-ui-react";
import React from 'react';
import { Quiz } from '../../../app/models/quiz';
import QuizList from "./QuizList";
import QuizDetails from "../Details/QuizDetails";

interface Props{
    quizzes:Quiz[];
}
export default function QuizDashboard({quizzes}:Props){
    return(
        <Grid>
             <Grid.Column width='10'>
             <QuizList quizzes={quizzes}/>
             </Grid.Column>
             <Grid.Column width='6'>
               <QuizDetails quizzes={quizzes[0]}/>
               </Grid.Column>
             </Grid>
    )
}