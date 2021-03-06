import React from 'react';
import { 
    Button,
    Container,
    Row
  } from 'reactstrap'; 

export default function Releases() {
    return (
        <section id="releases">
            <Container>
                <Row tag="h2">Releases</Row>
                <Row className="doc">
                    <Row tag="h3">v2.0</Row>
                    <p>
                        Currently, ENews stay in v2.0 version. In this patch, it 
                        can to send short links of news into Discord and Telegram.
                    </p>
                    <p>
                        That's change helped in the organization of the mensager, 
                        simplifying the content and making a better user experience (UX).
                    </p>
                    <a href="https://github.com/AlexNicolasCode/ENews-DiscordBot/releases/tag/v2.0">
                        <Button outline className="btn-outline-dark rounded-0">ENews Discord v2.0</Button>
                    </a>
                    <a href="http://github.com/AlexNicolasCode/ENews-TelegramBot/releases/tag/v2.0">
                        <Button outline className="btn-outline-dark rounded-0">ENews Telegram v2.0</Button>
                    </a>
                    <Row tag="h3" className="w-100">v1.0</Row>
                    <p>
                        That's the old and first version of ENews. Originally, 
                        the project will create to share news of a single website, called Mais Esports.
                    </p>
                    <p className="w-100">
                        Here, ENews only get the title and index into Discord and Telegram, 
                        something that has changed the v2.0 version.
                    </p>
                    <a href="http://github.com/AlexNicolasCode/ENews-DiscordBot/releases/tag/v1.0">
                        <Button outline className="btn-outline-dark rounded-0">ENews Discord v1.0</Button>
                    </a>   
                    <a href="http://github.com/AlexNicolasCode/ENews-TelegramBot/releases/tag/v1.0">
                        <Button outline className="btn-outline-dark rounded-0">ENews Telegram v1.0</Button>
                    </a>   
                </Row>
            </Container>
        </section>
    )
}