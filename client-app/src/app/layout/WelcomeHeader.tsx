import React from 'react';

import { Button, Grid, GridColumn, Icon } from 'semantic-ui-react';

export default function WelcomeHeader() {
    return(
    <Grid className='Homepage' divided='vertically'>
      <Grid.Row columns={2}>
      <GridColumn>
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
        </GridColumn>
    <GridColumn>
      <img className='space' src='/assets/Homepageimage2.png' alt="Failed to load" width='500px' height='300px' />
    </GridColumn>
    </Grid.Row>
  </Grid>
    )
}
