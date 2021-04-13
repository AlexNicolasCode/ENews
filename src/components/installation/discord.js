import React from 'react';
import { 
    Container,
    Row
  } from 'reactstrap'; 

export default function Discord() {
    return (
        <section id="discord">
            <Container>
                <Row tag="h3" className="doc__h3">Discord</Row>
                <Row className="doc">
                    <p className="doc__text">
                        The firts step of this installation is create a account on Discord. If you already have a account, go to new step of intallation into Discord. Otherwise, click here and create your account.
                    </p>
                    <p className="doc__text">
                        Then, join into Discord Developer page and click <strong>"New Application"</strong>. Now you will to choose a name to your Discord Aplication.
                    </p>
                    <Row></Row>
                    <p className="doc__text">
                        After choose the name, you can click in <strong>"Bot"</strong> and, then, <strong>"Add Bot"</strong>.
                    </p>
                    <Row></Row>
                    <p className="doc__text">
                        Now, you will copy the token. Please, save this token, it very important.
                    </p>
                    <Row></Row>
                    <p className="doc__text">
                        Go to OAuth2 and select <strong>"bot"</strong> in scopes:
                    </p>
                    <Row></Row>
                    <p className="doc__text">
                        Please, select options like this screenshot in <strong>"Bot Permissions"</strong>:
                    </p>
                    <Row></Row>
                    <p className="doc__text">
                        In Scopes, you can see a link. Please, copy it and open and a new tab.
                    </p>
                    <Row></Row>
                    <p className="doc__text">
                        Join your bot into a Discord server and click <strong>"Authorize"</strong>:
                    </p>
                    <Row></Row>
                    <p className="doc__text">
                        Now, go to next step of the this doc clicking here or go to Setting.
                    </p>
                </Row>
            </Container>
        </section>
    )
}