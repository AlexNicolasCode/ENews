import React, { useState } from 'react';
import { Button, Container, Col, Nav, Row } from 'reactstrap';
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <Row className="pt-3" style={{ height: "30px", width: "30px" }}>
            <Link to="/" className="link">
            <div className="ml-3">
                <svg width="30" height="30" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="40" fill="#f2f2f2"/>
                    <rect y="160" width="200" height="40" fill="#f2f2f2"/>
                    <rect y="80" width="200" height="40" fill="#f2f2f2"/>
                    <path d="M0 200V0L200 200H0Z" fill="#FF5E5E"/>
                </svg>
            </div>
            </Link>
        </Row>
    )
}

const Sections = ({isExpandInstall = false, isExpandDoc = false }) => { 
    const [expandInstall, setExpandInstall] = useState(isExpandInstall);
    const [expandDocs, setExpandDocs] = useState(isExpandDoc);
    
    return (
        <Container className="mt-5 float-left" xs="1">
            <Row xs="10"><strong><Link to="/introdution" className="link">Introdution</Link></strong></Row>
            <Row xs="10" className="mt-3" onClick={() => setExpandInstall(expandInstall => !expandInstall)}><strong><Link to="/installation" className="link">Installation</Link></strong></Row>
                {expandInstall &&
                    <Col xs="5">
                        <a href="#download" className="link">Download</a><br />
                        <a href="#install" className="link">Install</a><br />
                        <a href="#discord" className="link">Discord</a><br />
                        <a href="#telegram" className="link">Telegram</a><br />
                        <a href="#setting" className="link">Setting</a><br />
                    </Col>
                }
            <Row className="mt-3" onClick={() => setExpandDocs(expandDocs => !expandDocs)}><strong><Link to="/docs" className="link">Docs</Link></strong></Row>
                {expandDocs &&
                    <Col xs="10">
                        <a href="#commands" className="link">Commands</a><br />
                        <a href="#fonts" className="link">Fonts and API's</a><br />
                        <a href="#releases" className="link">Releases</a><br />
                    </Col>
                }
        </Container>
    )
}



export default function Menu() {
    const [isMenu, setIsMenu] = useState(false);
    const [isBtn, setIsBtn] = useState(true);

    function openMenu() {
        setIsMenu(true);
        setIsBtn(false);
    }

    function closeMenu() {
        setIsMenu(false);
        setIsBtn(true);
    }

    return (
        <>
            <Nav className="d-block sticky-top d-md-none zindex-fixed">
                { isBtn &&
                    <Button className="bg-dark mt-2 mr-2 p-4 float-right" onClick={openMenu}></Button>
                }
                { isMenu &&
                <>
                    <Button className="bg-white zindex-modal-backdrop mt-2 mr-2 p-4 float-right" onClick={closeMenu}></Button>
                    <Container className="bg-dark mr-3 zindex-sticky pt-7" style={{ width: "100%", height: "812px", fontSize: "24px" }}>
                        <strong><Link to="/introdution" className="link">Introdution</Link></strong><br/>
                        <strong><Link className="link" to="/installation">Installation</Link></strong><br/>
                        <strong><Link className="link" to="/docs">Docs</Link></strong>
                    </Container>
                </>
                }
            </Nav>
            <Nav className="d-none sticky-top bg-dark float-left d-md-block" style={{ width: '20%', height: '640px' }}>
                <Col>
                <Logo />
                <Sections />
                </Col>
            </Nav>
        </>
    )
}