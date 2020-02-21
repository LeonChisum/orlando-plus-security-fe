import React, { useState } from "react";
import { Card, Icon, Image, Grid } from "semantic-ui-react";

// imported data
import { managementData } from "../data/data";
import ManagementCard from "./ManagementCard";

export default function About() {
  const [management, setManagment] = useState(managementData);

  return (
    <div className="team-background">
      <section className="sub-header">
        <h4>MEET THE TEAM</h4>
        <p>Together Everyone Achieves More</p>
      </section>
      <section className="team-container">
        <div className="card-wrapper">
          {management.map(i => {
            return <ManagementCard key={i.id} manager={i} />;
          })}
        </div>
      </section>
      {/* <Card.Group itemsPerRow='three'>
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
               
                    <Card>
                        <Image src={CH} wrapped ui={false} className='image-container' />
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
            
            </Card.Group> */}
    </div>
  );
}
