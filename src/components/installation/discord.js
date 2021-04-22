import React from 'react';
import aplication from './img/new_application.png';
import bot from './img/add_bot.png';
import token from './img/copy_token.png';
import permissions from './img/bot_permissions.png';
import checked from './img/bot_checked.png';
import join from './img/join_server.png';
import join2 from './img/join_server-2.png';
import { 
    Container,
    Row
  } from 'reactstrap'; 

export default function Discord() {
    return (
        <section id="discord">
            <Container>
                <Row tag="h3" className="pl-0">Discord</Row>
                <Row className="doc">
                    <p>
                        The firts step of this installation is create a account on Discord. If you already have a account, go to new step of intallation into Discord. Otherwise, <a href="https://discord.com">click here</a> and create your account.
                    </p>
                    <p>
                        Then, join into <a href="https://discord.com/developers/applications">Discord Developer</a> page and click <strong>"New Application"</strong>. Now you will to choose a name to your Discord Aplication.
                    </p>
                    <img  alt="new aplication" src={aplication}/>
                    <p>
                        After choose the name, you can click in <strong>"Bot"</strong> and, then, <strong>"Add Bot"</strong>.
                    </p>
                    <img  alt="add a new bot" src={bot}/>
                    <p>
                        Now, you will copy the token. Please, save this token, it very important.
                    </p>
                    <img  alt="copy token" src={token}/>
                    <p>
                        Go to OAuth2 and select <strong>"bot"</strong> in scopes:
                    </p>
                    <img  alt="select your aplication like a bot" src={checked}/>
                    <p>
                        Please, select options like this screenshot in <strong>"Bot Permissions"</strong>:
                    </p>
                    <img  alt="add bot permissions" src={permissions}/>
                    <p>
                        In Scopes, you can see a link. Please, copy it and open and a new tab.
                    </p>
                    <img  alt="join our bot into a server" src={join}/>
                    <p>
                        Join your bot into a Discord server and click <strong>"Authorize"</strong>:
                    </p>
                    <img  alt="authorize your bot to join" src={join2}/>
                    <p>
                        Now, go to next step of the this doc clicking here or go to Setting.
                    </p>
                </Row>
            </Container>
        </section>
    )
}