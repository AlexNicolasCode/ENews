import React, { useState } from 'react';
import { Button, Container, Col, Row, Nav } from 'reactstrap';
import { Link } from 'react-router-dom'
import GitHub from '../components/others/github';

function Brand() {
  return (
    <Container className="d-none bg-dark float-left d-lg-block" style={{ height: '100vh', width: '33.3%'}}>
        <Row className="center">
          <svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="40" fill="#f2f2f2"/>
            <rect y="160" width="200" height="40" fill="#f2f2f2"/>
            <rect y="80" width="200" height="40" fill="#f2f2f2"/>
            <path d="M0 200V0L200 200H0Z" fill="#FF5E5E"/>
          </svg>
        </Row>
    </Container>
  )
}

function MenuHome() {
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
    <Nav className="d-block sticky-top d-md-none zindex-fixed">
        { isBtn &&
            <Button className="bg-dark mt-2 mr-2 p-4 float-right rounded-0" onClick={openMenu}></Button>
        }
        { isMenu &&
        <>
            <Button className="bg-white zindex-modal-backdrop mt-2 mr-2 p-4 float-right rounded-0" onClick={closeMenu}></Button>
            <Container className="bg-dark mr-3 zindex-sticky" style={{ width: "100%", height: "812px" }}>
                <OptionsMobile />
            </Container>
        </>
        }
    </Nav>
  )
}

function OptionsMobile() {
  return (
        <Container data-aos="fade-right" data-aos-duration="1600">
          <div className="float-left mt-7" style={{ fontSize: "24px" }}>
            <Link to="/introdution" className="link menu__options mt-4">About</Link><br/>
            <Link to="/installation" className="link menu__options mt-4">Install</Link><br/>
            <Link to="/docs" className="link menu__options mt-4">Docs</Link><br/>
            <Link to="/installation"className="link menu__options mt-4">Download</Link><br/>
            <a href="https://github.com/AlexNicolasCode/ENews-DiscordBot" className="link">GitHub</a>
          </div>
        </Container>
  );
}

function Options() {
  return (
        <Nav className="d-none float-right mt-2 mr-2 d-md-block" data-aos="fade-right" data-aos-duration="1600">
          <Link to="/introdution" className="menu__options mt-2 mr-3">About</Link>
          <Link to="/installation" className="menu__options mt-2 mr-3">Install</Link>
          <Link to="/docs" className="menu__options mt-2 mr-3">Docs</Link>
          <Link to="/installation"><Button outline className="btn-outline-dark rounded-0">Download</Button></Link>
        </Nav>
  );
}

export default function Home() {
  return (
    <>
      <GitHub />
      <Options className="d-none d-md-block"/>
      <MenuHome/>
      <Brand />
      <Container className="align-middle pt-8 align-middle" data-aos="fade-left" data-aos-duration="1600">
        <Row className="pt-4">
          <Col>
            <h1 className="pt-5 pt-md-2"><strong><span style={{ color: '#FF5E5E' }}>ENews</span></strong>: stay always <br />be <strong>informed</strong></h1>
          </Col>
        </Row>
      </Container>
    </>
  )
}