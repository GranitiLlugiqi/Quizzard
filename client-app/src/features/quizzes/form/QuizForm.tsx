import { Button, ButtonGroup, Form, Icon, Segment } from "semantic-ui-react";


export default function QuizForm(){
    return(
        <Segment>
            <Form>
                <Form.Input placeholder='Title'/>
                <Form.TextArea placeholder='Description'/>
                <Form.Input placeholder='picture'/>
                <ButtonGroup >
                <Button positive icon labelPosition='right'  inverted color='blue'size='huge'>
                 <Icon name = 'arrow alternate circle right'/>
                  Next
                </Button>
                <Button negative icon labelPosition='left'  inverted color='red'size='huge'>
                 <Icon name = 'cancel'/>
                  Cancel
                </Button>

                </ButtonGroup>
            </Form>
        </Segment>
    )
}