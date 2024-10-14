import React from "react";
import EducationItem from "./EducationItem";
import { Divider } from "@mui/joy";

export default function Education(params) {
    return (
        <>
            <Divider />
            <section className='inner-section-container' id="Education">
                <h1>Education</h1>
                <EducationItem />
            </section>
        </>
    );
};
