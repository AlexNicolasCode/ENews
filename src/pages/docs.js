import React from 'react';
import Menu from '../components/menu/menu';
import Commands from '../components/docs/commands';
import Fonts from '../components/docs/fonts';
import Releases from '../components/docs/releases';
import { Container, Row } from 'reactstrap'; 

export default function Installation() {
    return (
        <>
            <Menu />
            <artitle>
                <Container className="mb-3 pl-3 mr-2 w-md-75 pt-md-5 pl-md-0" data-aos="fade-left" data-aos-duration="700">
                    <h1 className="doc__title">Docs</h1>
                    <Commands />
                    <Fonts />
                    <Releases />
                </Container>
            </artitle>
        </>
    )
} 