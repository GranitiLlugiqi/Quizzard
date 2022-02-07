import React from 'react';
import { Button, ButtonGroup, Grid, GridColumn, Icon } from 'semantic-ui-react';

interface Props {
  openForm:() => void;
}

export default function WelcomeHeader({openForm}:Props) {
    return(
    <Grid   divided='vertically'>
      <Grid.Row columns={2} className='Homepage'>
      <GridColumn className='homepage1'>
        <h1  >Welcome to <b>QUIZZARD</b></h1>
          <h2 className='textcolor'>Want to create and play your personal quizzes? </h2>
            <p>You can do it with Quizzards create your quizzes, play,
             share and expand your knowledge on different fields.</p>
            <ButtonGroup>
            <Button onClick={openForm} className='buttonheader' icon labelPosition='left'   color='green' size='huge' >
            <Icon name='add'/>
            Create Quiz
        </Button>
        <Button className='buttonheader' icon labelPosition='right'   color='pink'size='huge'>
            <Icon name = 'play'/>
            Play Quiz
        </Button>
        </ButtonGroup>
        </GridColumn>
    <GridColumn className='homepage2'>
      <img className='space' src='/assets/Homepage1.png' alt="Failed to load" width='500px' height='300px' />
    </GridColumn>
    </Grid.Row>
  </Grid>
    )
}
