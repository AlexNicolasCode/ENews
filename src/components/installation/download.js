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
                <Container className="h-3 base__container">
                    <Row tag="h2" className="doc__h2">Download</Row>
                    <Row className="doc">
                        <p className="doc__text">
                            To start using Enews, you need download your main files. For this, select which version you want:
                        </p>
                        <Col xs="3">
                        <Button outline className="doc__btn btn-outline-dark rounded-0">Discord</Button>
                        <Button outline className="doc__btn btn-outline-dark rounded-0">Telegram</Button> 
                        </Col>
                        <p className="doc__text">
                            For this tutorial, you need download a IDE (Integrated Development Environment). See some exemples that you can download:
                        </p>
                        <Col className="doc__links">
                            <a href="https://code.visualstudio.com/Download">VS Code (recommended)</a><br />
                            <a href="http://www.rj-texted.se/index.html">RJ TextEd</a><br />
                            <a href="https://atom.io/">Atom</a><br />
                            <a href="http://lighttable.com/">Light Table</a>
                        </Col>
                        <p className="doc__text">
                            For this tutorial, you need download a IDE (Integrated Development Environment). See some exemples that you can download:
                        </p>
                    </Row>
                </Container>
            </section>
    )
}