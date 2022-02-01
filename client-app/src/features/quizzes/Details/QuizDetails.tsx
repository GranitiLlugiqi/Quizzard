import React from "react";
import { Button, Card ,Image } from "semantic-ui-react";
import { Quiz } from '../../../app/models/quiz';

interface Props{
    quizzes: Quiz
}

export default function QuizDetails({quizzes }:Props)
{
    return (
        <Card>
            <Image src={`/assets/pictureImages/${quizzes.picture}.jpg`} />
          <Card.Content>
            <Card.Header>{quizzes.title}</Card.Header>
            <Card.Description>
                {quizzes.description}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button.Group widths='2'/>
              <Button basic color='purple' content='Play'/>
              <Button basic color='yellow' content='Cancel'/>
            </Card.Content>
            </Card>
    )
}