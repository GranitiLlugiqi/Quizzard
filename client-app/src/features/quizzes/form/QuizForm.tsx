import { Button, ButtonGroup, Form, Icon, Item, Label, Segment } from "semantic-ui-react";

interface Props {
    closeForm: () => void;
}

export default function QuizForm({closeForm}:Props){
    return(
        <Segment inverted color='violet' >
            <div className="formtitle">
            <Item>
                
            
                    <h1>Quizzard</h1>
                    
            </Item>
            </div>
            <Form >
                <Form.Input label='Title' placeholder='Title'/>
                <Form.TextArea placeholder='Description'/>
                <Form.Input placeholder='picture'/>
                
                <Form.Input label='Question 1'placeholder='Question 1'/>
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

                <Form.Input label='Question 3'placeholder='Question 3'/>
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

                <Form.Input label='Question 4'placeholder='Question 4'/>
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

                <Form.Input label='Question 5'placeholder='Question 5'/>
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
                
                <ButtonGroup fluid >
                <Button positive icon labelPosition='left'   color='green'size='huge'>
                 <Icon name = 'arrow alternate circle left'/>
                  Create
                </Button>
    
                <Button onClick={closeForm} negative icon labelPosition='right'  color='red'size='huge'>
                 <Icon name = 'cancel'/>
                  Cancel
                </Button>

                </ButtonGroup>
            </Form>
        </Segment>
    )
}