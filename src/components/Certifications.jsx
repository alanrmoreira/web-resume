import React from "react";
import CertificationsItems from "./CertificationsItems";
import { Divider } from "@mui/joy";


export default function Certifications(params) {
    return (
        <>
            <Divider />
            <section className='inner-section-container'>
                <h1>Certifications</h1>
                <CertificationsItems />
            </section>
        </>
    );
};
