import React from 'react';
import { 
    Container,
    Row
  } from 'reactstrap'; 

export default function Setting() {
    return (
        <section id="setting">
            <Container>
                <Row tag="h2" className="doc__h2">Setting</Row>
                <Row className="doc">
                    <p className="doc__text">
                        If you already download the files and decompact, probally you have a folter like this:
                    </p>
                    <Row></Row>
                    <p className="doc__text">
                        or this:
                    </p>
                    <Row></Row>
                    <p className="doc__text">
                        Do you remember that token? We'll need use it now!
                    </p>
                    <p className="doc__text">
                        Open you index.js file into VS Code (or another IDE):
                    </p>
                    <Row></Row>
                    <p className="doc__text">
                        Now, get your token and paste into your file replacing the word <strong>"TOKEN"</strong>:
                    </p>
                    <Row></Row>
                    <p className="doc__text">
                        Into you terminal, paste npm install and press enter:
                    </p>
                    <Row></Row>
                    <p className="doc__text">
                        Now, text node index.js and enjoy your bot!
                    </p>       
                </Row>
            </Container>
        </section>
    )
}