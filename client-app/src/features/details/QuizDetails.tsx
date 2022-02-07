import { useState } from "react";
import { Button, ButtonGroup, Card, Form, Icon, Item, ItemContent, Segment, Table } from "semantic-ui-react";
import { Question, Quiz } from "../../app/models/quiz";

const ButtonExampleDisabled = () => <Button disabled>Disabled</Button>

interface Props {
    quiz:Quiz;
    cancelSelectQuiz:() => void;
    
}

export default function QuizDetails({quiz: playedQuiz, cancelSelectQuiz}:Props) {
    const initialState = playedQuiz ?? {
      id:'',
      title: '',
      description: '',
      picture: '',
      questions: [
        {
        id:'',
        questionDescription: '',
        option1: '',
        answer1: '',
        option2: '',
        answer2: '',
        option3: '',
        answer3: '',
        option4: '',
        answer4: '',
         } ],
    }

    const[quiz, setQuiz] = useState(initialState);
  
  
  
  return (
          <Segment inverted color="violet">
              
            <Item.Group devided font-family="Courier New,monospace">
            <Item.Header className="QuizTitleSheet" as="a">{quiz.title} </Item.Header>
            <Item src={`/assets/pictureImages/${quiz.picture}.jpg`}style={{  width: "400px", height: "200px" }}/>
            {quiz.questions?.map(question=> (
                <Item key={question.id}>
                  <Item.Content inverted>
                    <Item.Description>
                        {question.questionDescription}
                    </Item.Description>
                    <Form.Input label='Question 2'placeholder='Question 2'/>
                <Form.Group >
                <Form.Input placeholder='Option 1'/>
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                <Form.Input placeholder='Option 2'/>
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                </Form.Group>
                <Form.Group>
                <Form.Input placeholder='Option 3'/>
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                <Form.Input placeholder='Option 4'/>
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                </Form.Group>
                    
                   
                    
                  </Item.Content>
                </Item>
             ))}
              <ButtonGroup fluid onClick={ButtonExampleDisabled}>
                <Button icon labelPosition='left'   color='blue'size='huge'>
                 <Icon name = 'square full'/>
                  Done
                </Button>
    
                <Button  icon labelPosition='right'  color='yellow'size='huge'>
                 <Icon name = 'redo'/>
                  Restart
                </Button>

                </ButtonGroup>
            </Item.Group>
           
        </Segment>
    );
      
}

