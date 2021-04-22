import React from 'react';
import search from './img/search_botfather.png';
import newBot from './img/newbot.png';
import userName from './img/username_newbot.png';
import { 
    Container,
    Row
  } from 'reactstrap'; 

export default function Telegram() {
    return (
        <section id="telegram">
            <Container>
                <Row className="doc">
                    <Row tag="h3">Telegram</Row>
                    <p>
                        To start, you need add BotFather into your Telegram App:
                    </p>
                    <img  alt="search botfather" src={search}/>
                    <p>
                        Now, send "/newbot" to him and wait a anwser:
                    </p>
                    <img  alt="add new bot" src={newBot}/>
                    <p>
                        Then you need give a name and a username for your bot:
                    </p>
                    <img  alt="add username" src={userName}/>
                    <p>
                        If everything went well, you'll receive a token to access the HTTP API. It's so important to installation, please save it.
                    </p>
                </Row>
            </Container>
        </section>
    )
}