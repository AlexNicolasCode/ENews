import React from 'react';
import { 
    Container,
    Row
  } from 'reactstrap'; 

export default function Install() {
    return (
        <section id="install">
            <Container>
                <Row tag="h2" className="doc__h2">Install</Row>
                <Row className="doc">
                    <p className="doc__text">
                        Now you have the main files, we can start!
                    </p>
                    <p className="doc__text">
                        If you select Discord, keep scrolling. Otherwise, click here and go to Telegram option or skip the next step.
                    </p>
                </Row>
            </Container>
        </section>
    )
}