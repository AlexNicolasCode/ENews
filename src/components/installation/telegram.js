import React from 'react';
import { 
    Container,
    Row
  } from 'reactstrap'; 

export default function Telegram() {
    return (
        <section id="telegram">
            <Container>
                <Row className="doc">
                    <Row tag="h3" className="doc__h3">Telegram</Row>
                    <p className="doc__text">
                        To start, you need add BotFather into your Telegram App:
                    </p>
                    <Row></Row>
                    <p className="doc__text">
                        Now, send "/newbot" to him and wait a anwser:
                    </p>
                    <Row></Row>
                    <p className="doc__text">
                        Then you need give a name and a username for your bot:
                    </p>
                    <Row></Row>
                    <p className="doc__text">
                        If everything went well, you'll receive a token to access the HTTP API. It's so important to installation, please save it.
                    </p>
                </Row>
            </Container>
        </section>
    )
}