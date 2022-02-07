import React, { Fragment, useEffect, useState } from 'react';
 import { Container, Header } from 'semantic-ui-react';
 import { Question, Quiz } from '../models/quiz';
 import NavBar from './NavBar';
 import QuizDashboard from '../../features/quizzes/Dashboard/QuizDashboard';
 import WelcomeHeader from './WelcomeHeader';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';
 
 
 function App() {
   const[quizzes, setQuizzes] = useState<Quiz[]>([]);
   const[selectedQuiz, setSelectedQuiz] = useState<Quiz | undefined>(undefined);
   const[loading, setLoading] = useState(true);
   const[questions, setQuestions] = useState<Question[]>([]);
   const[createMode, setCreateMode ] = useState(false);
  
 
   useEffect(() =>{
     agent.Quizzes.list().then(response =>{
     setQuizzes(response);
     setLoading(false);
})
   }, [])

   
 
   function handleSelectQuiz(id:number){
     setSelectedQuiz(quizzes.find(x =>x.id === id));
   }
 
   function handleCancelSelectedQuiz(){
     setSelectedQuiz(undefined);
   }
  function handleFormOpen(id?:number){
    id ? handleSelectQuiz(id) : handleCancelSelectedQuiz();
    setCreateMode(true);
  }
  function handleFormClose(){
    setCreateMode(false);
  }
   
   if(loading) return <LoadingComponent content='Loading app' />
   return (
     <Fragment>
       <Header >
       <NavBar />
       <div className='cont'>
       <Container style={{marginTop:'4em'}}>
       <WelcomeHeader
       openForm={handleFormOpen} 
        />
       </Container>
       </div>
       </Header>
       
       <body>
         
       <Container style={{marginTop:'1em' }}>
        <QuizDashboard 
        quizzes={quizzes}
        selectedQuiz={selectedQuiz}
        selectQuiz={handleSelectQuiz}
        cancelSelectQuiz={handleCancelSelectedQuiz}
        question={questions}
        createMode={createMode}
        openForm={handleFormOpen}
        closeForm={handleFormClose}
         />
       </Container>
       </body>
     </Fragment>
   );
 }
 
 export default App;
  
  


