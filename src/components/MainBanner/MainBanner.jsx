import { Divider } from "@mui/material";
import React from "react";
import Typewriter from 'typewriter-effect';

export default function MainBanner(params) {

    return (
        <>
            <Divider />
            <section id="main-banner">

                <div className="banner-overlay"></div>
                <div className="typed-line">
                    <Typewriter
                        options={{
                            strings: ['Tech Lead', 'Fullstack Developer', 'Project Manager'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 'natural',
                            delay: 140
                        }}
                    />
                </div>
            </section>
        </>
    );
};
