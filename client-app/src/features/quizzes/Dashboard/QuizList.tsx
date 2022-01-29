import React from 'react';
import { Button, Icon, Item, Segment } from 'semantic-ui-react';
import { Quiz } from '../../../app/models/quiz';

interface Props{
    quizzes:Quiz[];
}

    export default function QuizList({quizzes}: Props)
    {
        return(
            <Segment>
                <Item.Group devided>
                    {quizzes.map(quiz=>(
                        <Item key={quiz.id}>
                            <Item.Content>
                                <Item.Header as='a'>{quiz.title} </Item.Header>
                                <Item.Description>
                                    <div>{quiz.description}</div>
                                </Item.Description>
                                <Item.Extra>
                                <Button icon labelPosition='left'  inverted color='purple'size='huge'>
                                 <Icon name = 'play'/>
                                 Play Quiz
                                    </Button>
                                </Item.Extra> 
                            </Item.Content>
                        </Item>

                     ))}
                </Item.Group>
            </Segment>

        )
    }
