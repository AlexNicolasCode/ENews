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
                <Row tag="h2" className="doc__h2">Releases</Row>
                <Row className="doc">
                    <Row tag="h3" className="doc__h3">v2.0</Row>
                    <p className="doc__text">
                        Currently, ENews stay in v2.0 version. In this patch, it 
                        can to send short links of news into Discord and Telegram.
                    </p>
                    <p className="doc__text">
                        That's change helped in the organization of the mensager, 
                        simplifying the content and making a better user experience (UX).
                    </p>
                    <Button outline className="doc__btn btn-outline-dark rounded-0">Download v2.0</Button>
                    <Row tag="h3" className="doc__h3 w-100">v1.0</Row>
                    <p className="doc__text">
                        That's the old and first version of ENews. Originally, 
                        the project will create to share news of a single website, called Mais Esports.
                    </p>
                    <p className="doc__text">
                        Here, ENews only get the title and index into Discord and Telegram, 
                        something that has changed the v2.0 version.
                    </p>
                    <Button outline className="doc__btn btn-outline-dark rounded-0">Download v1.0</Button>
                </Row>
            </Container>
        </section>
    )
}