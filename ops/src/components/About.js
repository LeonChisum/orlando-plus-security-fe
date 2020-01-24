import React from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

// imported images
import MC from '../images/MC Headshot.jpg'
import CH from '../images/CH Headshot.JPG'
import TW from '../images/TW Headshot.JPG'

export default function About() {
    return (
        <div className='team-background'>
            <section className='sub-header'>
                <h4>MEET THE TEAM</h4>
                <p>Together Everyone Achieves More</p>
            </section>
            <Grid className='team-container' divided='vertically' >
                <Grid.Row columns={3} className='team-view'>
                <Grid.Column>
                    <Card>
                        <Image src={MC} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>MICHAEL CALLAGHAN</Card.Header>
                        <Card.Meta>
                            <span className='date'>PRESIDENT</span>
                        </Card.Meta>
                        <Card.Description>
                            Mike is the President.
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a>
                            <Icon name='envelope outline' />
                            22 Friends
                        </a>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Image src={CH} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>MICHAEL CALLAGHAN</Card.Header>
                        <Card.Meta>
                            <span className='date'>PRESIDENT</span>
                        </Card.Meta>
                        <Card.Description>
                            Mike is the President.
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a>
                            <Icon name='envelope outline' />
                            22 Friends
                        </a>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Image src={TW} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>MICHAEL CALLAGHAN</Card.Header>
                        <Card.Meta>
                            <span className='date'>PRESIDENT</span>
                        </Card.Meta>
                        <Card.Description>
                            Mike is the President.
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a>
                            <Icon name='envelope outline' />
                            22 Friends
                        </a>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
