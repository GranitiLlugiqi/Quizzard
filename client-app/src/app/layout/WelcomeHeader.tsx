import React from 'react';
import { Button, Grid, Icon } from 'semantic-ui-react';

export default function WelcomeHeader() {
    return(
    <Grid className='Homepage'>
    <Grid.Column width='8' height='8'>
        <h1 >Welcome to <b>QUIZZARD</b></h1>
        <h2>Want to create and play your personal quizzes? </h2>
        <p>You can do it with Quizzards create your quizzes, play,
             share and expand your knowledge on different fields.</p>
        <Button icon labelPosition='left'  inverted color='purple' size='huge' >
            <Icon name = 'add'/>
            Create Quiz
        </Button>
        <Button icon labelPosition='left'  inverted color='purple'size='huge'>
            <Icon name = 'play'/>
            Play Quiz
        </Button>
    </Grid.Column>
    <Grid.Column width='7' height='7'>
      <img className='space' src='/assets/Homepage1.png' alt="Failed to load" width='500px' height={300} />
    </Grid.Column>
  </Grid>
    )
}
