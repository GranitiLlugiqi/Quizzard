import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const[quizzes, setQuizzes] = useState([]);

  useEffect(() =>{
    axios.get('http://localhost:5000/api/quizzes').then(response =>{
      console.log(response);
    setQuizzes(response.data);
    })
  },[])

  return (
    <div >
      
    </div>
  );
}

export default App;
