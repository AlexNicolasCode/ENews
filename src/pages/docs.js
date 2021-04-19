import React from 'react';
import Menu from '../components/menu/menu';
import Commands from '../components/docs/commands';
import Fonts from '../components/docs/fonts';
import Releases from '../components/docs/releases';
import GitHub from '../components/others/github';

export default function Installation() {
    return (
        <>
            <Menu />
            <GitHub />
            <artitle>
                <div className="doc pt-5 pl-3 mr-2 pt-md-5 pl-md-0 ml-md-9 pl-md-8 pr-md-5" data-aos="fade-left" data-aos-duration="700">
                    <h1 className="doc__docs bg-dark p-1 text-white">Docs</h1>
                    <Commands />
                    <Fonts />
                    <Releases />
                </div>
            </artitle>
        </>
    )
} 