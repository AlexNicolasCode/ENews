import React from 'react';
import { 
    Container,
    Row
  } from 'reactstrap'; 

export default function Font() {
    return (
        <section id="fonts">
            <Container>
                <Row tag="h2">Fonts and API's</Row>
                <Row className="doc">
                    <Row tag="h3">Fonts</Row>
                    <p>
                        All news got caught of websites, 
                        jornals and blogs who are subscribers into Google News.
                    </p>
                    <Row tag="h3">API's</Row>
                    <p>
                        Currently, ENews use same API to work. 
                        In interaction with Discord and Telegram, it use Discord.js 
                        and Node-telegram-bot-api, both into Node.js system.
                    </p>
                    <p>
                        Beyond them, the Cheerio, a API that convert JQuery to 
                        server-side, and node-url-shortener, a shortener url, was also used in both versions.
                    </p>
                </Row>
            </Container>
        </section>
    )
}