import React from "react";
import { Button, Icon, Item, Segment } from "semantic-ui-react";
import { Quiz } from "../../../app/models/quiz";

interface Props {
  quizzes: Quiz[];
}

export default function QuizList({ quizzes }: Props) {
  return (
    <Segment inverted color="violet">
      <Item.Group devided font-family="Courier New,monospace">
        {quizzes.map((quiz) => (
          <Item key={quiz.id}>
            <Item.Content inverted>
              <Item.Image
                className="quizpictures"
                size="big"
                marginRight="10px"
                src={`/assets/pictureImages/${quiz.picture}.jpg`}
                style={{ display: "block", width: "100%", innerheight: "100%" }}
              />

              <Item.Header as="a">{quiz.title} </Item.Header>

              <Item.Description>
                <div className="ptextcolor">{quiz.description}</div>
              </Item.Description>
              <Item.Extra>
                <Button
                  icon
                  labelPosition="right"
                  inverted
                  color="violet"
                  size="huge"
                >
                  <Icon name="play" />
                  Play Quiz
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}
