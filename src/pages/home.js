import React, { useState } from 'react';
import { Button, Container, Col, Row, Nav } from 'reactstrap';
import { Link } from 'react-router-dom'

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
            <Button className="bg-dark mt-2 mr-2 p-4 float-right" onClick={openMenu}></Button>
        }
        { isMenu &&
        <>
            <Button className="bg-white zindex-modal-backdrop mt-2 mr-2 p-4 float-right" onClick={closeMenu}></Button>
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
          <Link to="/introdution" className="link menu__options mt-2 mr-3">About</Link>
          <Link to="/installation" className="link menu__options mt-2 mr-3">Install</Link>
          <Link to="/docs" className="link menu__options mt-2 mr-3">Docs</Link>
          <Link to="/installation" className="link"><Button outline className="btn-outline-dark rounded-0">Download</Button></Link>
        </Nav>
  );
}

function GitHub() {
  return (
    <a href="https://github.com/AlexNicolasCode/ENews-DiscordBot" className="link github">
      <svg role="img" height="40px" viewBox="0 0 24 24" fill="#343a40" xmlns="http://www.w3.org/2000/svg" data-aos="fade-left" data-aos-duration="1600">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
        3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
        0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 
        3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 
        1.236 1.838 1.236 1.07 1.835 2.809 1.305 
        3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 
        0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 
        3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 
        3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 
        3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 
        2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 
        12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    </a>
  )
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
            <h1 className="pt-2"><strong><span style={{ color: '#FF5E5E' }}>ENews</span></strong>: stay always <br />be <strong>informed</strong></h1>
          </Col>
        </Row>
      </Container>
    </>
  )
}