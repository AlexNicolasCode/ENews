import React from 'react';
import Menu from '../components/menu/menu';
import Download from '../components/installation/download';
import Install from '../components/installation/install';
import Discord from '../components/installation/discord';
import Telegram from '../components/installation/telegram';
import Setting from '../components/installation/setting';
import { Container, Row} from 'reactstrap'; 

export default function Installation() {
    return (
        <>
            <Menu />
            <artitle className="">
                <Container fluid="sm" className="mb-3 mr-2 w-100 pt-md-5 pl-md-0" data-aos="fade-left" data-aos-duration="700">
                    <h1 className="doc__title">Installation</h1>
                    <Download />
                    <Install />
                    <Discord />
                    <Telegram />
                    <Setting />
                </Container>
            </artitle>
        </>
    )
} 