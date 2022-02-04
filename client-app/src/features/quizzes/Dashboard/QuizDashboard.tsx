import { Grid, GridColumn } from "semantic-ui-react";
import React from 'react';
import { Quiz } from '../../../app/models/quiz';
import QuizList from "./QuizList";
import QuizForm from "../form/QuizForm";


interface Props{
    quizzes:Quiz[];
}
export default function QuizDashboard({quizzes}:Props){
    return(
        <Grid >
             <GridColumn width='10' >
             {quizzes[0] &&
             <QuizList quizzes={quizzes}/>}
             </GridColumn>
             <GridColumn width='6'>
                 <QuizForm />
             </GridColumn>
             </Grid>
    )
}