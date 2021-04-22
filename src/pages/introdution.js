import React from 'react';
import Menu from '../components/menu/menu';
import GitHub from '../components/others/github';

export default function Introdution() {
    return (
        <>
            <Menu />
            <GitHub />
            <article className="doc pt-5 pl-3 mr-5 pt-md-5 ml-md-9 pl-md-8 pr-md-5" data-aos="fade-left" data-aos-duration="700">
                <h1 className="introdution bg-dark p-1 text-white">Introduction</h1>
                <p>
                    ENews is a bot developer for Alex Nicolas in Node.js with a single objective: 
                    share news about eSports. Your first version will launched in January, 2021. 
                    Since then he has been winning new updates and features. 
                    Currently, it to send news only Portuguese, but it must to change in next updates.
                </p>
                <p>
                    Today, the ENews is available for Discord and Telegram for study or personal use. 
                    Want to know more? See the docs and to know install this bot into your server or Telegram app.
                </p>
            </article>
        </>
    )
}