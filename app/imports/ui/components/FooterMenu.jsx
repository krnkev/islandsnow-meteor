import React from 'react';
import {  Grid, Button, Form, List } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
    render() {
        return (
            <Grid
                centered
                style={{ backgroundColor:'#white', color: '#black', padding: '10px 8px 10px 8px'}}
                columns='equal'
            >
                <Grid.Column>
                    <List>
                        About Us <br />
                        Store Locations <br />
                        Employment <br />
                        Videos <br />
                        Shipping and Returns <br />
                        Terms and Conditions <br />
                        Privacy Policy <br />
                    </List>
                </Grid.Column>

                <Grid.Column>
                    <List>
                        Men <br />
                        Women <br />
                        Kids <br />
                        Brands <br />
                        Sale <br />
                    </List>
                </Grid.Column>

                <Grid.Column>
                    <List>
                        CONNECT <hr />
                        Sign up for the latest updates
                        <Form>
                            <Form.Field>
                                <input placeholder='Email Address' />
                            </Form.Field>
                            <Button
                                type='submit'
                                floated='right'
                                style={{ backgroundColor: 'black', color: 'white' }}>Join</Button>
                        </Form>
                    </List>
                </Grid.Column>
            </Grid>
        )
    }
}
