import React from 'react';
import { 
    Button,
    Container,
    Col,
    Row,
  } from 'reactstrap'; 

export default function Download() {
    return (
            <section id="download">
                <Container>
                    <Row tag="h2">Download</Row>
                    <Row className="doc">
                        <p>
                            To start using Enews, you need download your main files. For this, select which version you want:
                        </p>
                        <Col xs="3">
                        <a href="https://github.com/AlexNicolasCode/ENews-DiscordBot/releases/tag/v2.0"><Button outline className="btn-outline-dark rounded-0">Discord</Button></a><br/>
                        <a href="https://github.com/AlexNicolasCode/ENews-TelegramBot/releases/tag/v2.0"><Button outline className="btn-outline-dark rounded-0">Telegram</Button></a>
                        </Col>
                        <p>
                            For this tutorial, you need download a IDE (Integrated Development Environment). See some exemples that you can download:
                        </p>
                        <Col className="mb-4">
                            <a href="https://code.visualstudio.com/Download">VS Code (recommended)</a><br />
                            <a href="http://www.rj-texted.se/index.html">RJ TextEd</a><br />
                            <a href="https://atom.io/">Atom</a><br />
                            <a href="http://lighttable.com/">Light Table</a>
                        </Col>
                        <p>
                            For this tutorial, you need download a IDE (Integrated Development Environment). See some exemples that you can download:
                        </p>
                    </Row>
                </Container>
            </section>
    )
}