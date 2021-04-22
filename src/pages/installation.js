import React from 'react';
import Menu from '../components/menu/menu';
import Download from '../components/installation/download';
import Install from '../components/installation/install';
import Discord from '../components/installation/discord';
import Telegram from '../components/installation/telegram';
import Setting from '../components/installation/setting';
import GitHub from '../components/others/github';

export default function Installation() {
    return (
        <>
            <Menu />
            <GitHub />
            <artitle>
                <div className="doc pt-5 p-2 mr-2 pt-md-5 pl-md-0 ml-md-9 pr-md-5" data-aos="fade-left" data-aos-duration="700">
                    <h1 className="installation bg-dark p-1 text-white">Installation</h1>
                    <Download />
                    <Install />
                    <Discord />
                    <Telegram />
                    <Setting />
                </div>
            </artitle>
        </>
    )
} 