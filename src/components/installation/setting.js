import React from 'react';
import folder from './img/folder.png';
import token_discord from './img/token_key-discord.png';
import token_telegram from './img/token_key-telegram.png';
import { 
    Container,
    Row
  } from 'reactstrap'; 

export default function Setting() {
    return (
        <section id="setting">
            <Container>
                <Row tag="h2">Setting</Row>
                <Row className="doc">
                    <p>
                        If you already download the files, probally you have a folter like this:
                    </p>
                    <img  alt="folder" className="doc__img" src={folder}/>
                    <p>
                        Do you remember that token? We'll need use it now!
                    </p>
                    <p>
                        Open you index.js file into VS Code (or another IDE) and
                        paste your token replacing the word <strong>"TOKEN"</strong>:
                    </p>
                    <img  alt="token discord" className="doc__img" src={token_discord}/>
                    <p>
                        or in Telegram version:
                    </p>
                    <img  alt="token telegram" className="doc__img" src={token_telegram}/>
                    <p>
                        Into you terminal, paste <strong>npm i --save fs cheerio node-url-shortener request</strong> and press enter.
                    </p>
                    <p>
                        After, you can paster npm i --save discord.js, for Discord version, or npm i --save node-telegram-bot-api, for Telegram version.
                    </p>       
                    <p>
                        Now, text node index.js and enjoy your bot!
                    </p>       
                </Row>
            </Container>
        </section>
    )
}