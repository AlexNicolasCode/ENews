import React from 'react';
import { 
    Container,
    Col,
    Row
  } from 'reactstrap'; 

export default function Commands() {
    return (
        <section id="commands">
            <Container>
                <Row tag="h2">Commands</Row>
                <Row className="doc">
                    <p>
                      Like all bots, ENews hava so many commands. 
                      Both in the discord and in the telegram you'll use the same commands. 
                      See the all commands:
                    </p>
                    <strong>
                        <Col className="mb-4">
                            !font <br />
                            !about <br />
                            !news <br />
                            !lol <br />
                            !r6 <br />
                            !csgo <br />
                            !valorant <br />
                        </Col>
                    </strong>
                    <br />
                    <p>
                        Today, ENews is availble for Discord and Telegram for study or personal use. Want to know more? See the
                        docs and to know install this bot into your server ou group.
                    </p>
                </Row>
            </Container>
        </section>
    )
}