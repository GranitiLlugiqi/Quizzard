import React from 'react';
import { Button, Container, Icon, Menu } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo1.png" alt="logo" style={{marginRight: '10px'}}/>
                    Quizzard
                </Menu.Item>
                <Menu.Item name='Quizzes'/>
                <Menu.Item>
                <Button icon labelPosition='left'  inverted color='green'size='huge'>
                  <Icon name = 'sign in'/>
                    Sign In
                    </Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}