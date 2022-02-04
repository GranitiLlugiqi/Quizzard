import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header } from 'semantic-ui-react';
import { Quiz } from '../models/quiz';
import NavBar from './NavBar';
import QuizDashboard from '../../features/quizzes/Dashboard/QuizDashboard';
import WelcomeHeader from './WelcomeHeader';


function App() {
  const[quizzes, setQuizzes] = useState<Quiz[]>([]);
  const[selectedQuiz, setSelectedQuiz] = useState<Quiz | undefined>(undefined);
 

  useEffect(() =>{
    axios.get<Quiz[]>('http://localhost:5000/api/quizzes').then(response =>{
    setQuizzes(response.data);

    })
  }, [])

  function handleSelectedQuiz(id:number){
    setSelectedQuiz(quizzes.find(x =>x.id === id));
  }

  function handleCancelSelectedQuiz(){
    setSelectedQuiz(undefined);
  }
  
  return (
    <Fragment>
      <Header >
      <NavBar />
      <div className='cont'>
      <Container style={{marginTop:'4em'}}>
      <WelcomeHeader />
      </Container>
      </div>
      </Header>
      <body>
        
      <Container style={{marginTop:'1em' }}>
       <QuizDashboard quizzes={quizzes} />
      </Container>
      </body>
    </Fragment>
  );
}

export default App;
