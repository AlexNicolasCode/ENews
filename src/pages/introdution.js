import React from 'react';
import Menu from '../components/menu/menu';
import { 
    Container,
    Row
  } from 'reactstrap'; 

export default function Introdution() {
    return (
        <>
            <Menu />
            <Container className="mb-3 pl-3 mr-2 w-md-75 pt-md-5 pl-md-0">
                <Row className="doc pt-5" data-aos="fade-left" data-aos-duration="700">
                    <h1 className="doc__title">Introduction</h1>
                    <o className="doc__text">
                        ENews is a bot developer for Alex Nicolas in Node.js with a single objective: share news about eSports. 
                        Your firt version will launched in January, 2021. Since then he has been winning new update. Currenly, 
                        he get news only Portuguese, but it must switch in next patchs.
                    </o>
                    <o className="doc__text">
                        Today, ENews is availble for Discord and Telegram for study or personal use. Want to know more? See the
                        docs and to know install this bot into your server ou group.
                    </o>
                </Row>
            </Container>
        </>
    )
}