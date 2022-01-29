import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Quiz } from '../models/quiz';
import NavBar from './NavBar';
import QuizDashboard from '../../features/quizzes/Dashboard/QuizDashboard';
import WelcomeHeader from './WelcomeHeader';

function App() {
  const[quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() =>{
    axios.get<Quiz[]>('http://localhost:5000/api/quizzes').then(response =>{
    setQuizzes(response.data);
    })
  }, [])

  return (
    <Fragment>
      <NavBar />
      <Container style={{marginTop:'5em'}}>
      <WelcomeHeader />
      </Container>
      <Container style={{marginTop: '7em'}}>
       <QuizDashboard quizzes={quizzes} />
      </Container>
    </Fragment>
  );
}

export default App;
