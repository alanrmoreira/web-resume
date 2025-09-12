import React from "react";
import { Divider } from "@mui/joy";
import CardItem from "../Utils/CardItem";

export default function Certifications() {
    return (
        <>
            <Divider />
            <section className="inner-section-container" id="certifications">
                <h1>Certifications</h1>
                <div className="flex-content">
                    <CardItem
                        link="https://englishtest.duolingo.com/applicants"
                        logo="det-logo.png"
                        itemName="DET"
                        itemDate="2023"
                        itemDateMessage="Issued"
                        city="Curitiba | Brazil"
                        itemSize="3"
                    />

                    <CardItem
                        link="https://ielts.org/"
                        logo="ielts-logo.png"
                        itemName="IELTS"
                        itemDate="2022"
                        itemDateMessage="Issued"
                        city="Curitiba | Brazil"
                        itemSize="3"
                    />

                    <CardItem
                        link="https://www.scrum.org/assessments/professional-scrum-master-i-certification"
                        logo="psm1-logo.png"
                        itemName="PSM 1"
                        itemDate="2021"
                        itemDateMessage="Issued"
                        city="Curitiba | Brazil"
                        itemSize="3"
                    />

                    <CardItem
                        link="https://www.uniagil.com.br/lacp/"
                        logo="lacp-logo.png"
                        itemName="LACP"
                        itemDate="2021"
                        itemDateMessage="Issued"
                        city="Curitiba | Brazil"
                        itemSize="3"
                    />

                    <CardItem
                        link="https://www.setadg.com.br/site/en/trainings-in-company/198/lss-green-belt/"
                        logo="lss-logo.png"
                        itemName="LSS Green Belt"
                        itemDate="2019"
                        itemDateMessage="Issued"
                        city="Curitiba | Brazil"
                        itemSize="3"
                    />
                </div>
            </section>
        </>
    );
}