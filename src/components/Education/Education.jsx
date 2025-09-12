import React from "react";
import { Divider } from "@mui/joy";
import CardItem from "../Utils/CardItem";

export default function Education() {
    return (
        <>
            <Divider />
            <section className="inner-section-container" id="education">
                <h1>Education</h1>
                <div className="flex-content">
                    <CardItem
                        link="https://www.sait.ca/programs-and-courses/diplomas/interactive-design-web-design-and-development"
                        logo="sait-logo.png"
                        itemName="IDD - Web Development"
                        itemDate="2025"
                        itemDateMessage="Conclusion"
                        city="Calgary | Canada"
                        itemSize="2"
                    />
                    <CardItem
                        link="https://www.posanhanguera.com.br/tecnologia-java-anhanguera-educacao-a-distancia/p"
                        logo="anhanguera-logo.png"
                        itemName="Java"
                        itemDate="2023"
                        itemDateMessage="Conclusion"
                        city="Curitiba | Brazil"
                        itemSize="2"
                    />
                    <CardItem
                        link="https://educacao-executiva.fgv.br/cursos/online/mba-online/mba-em-gestao-gerenciamento-de-projetos"
                        logo="fgv-logo.png"
                        itemName="MBA Project Management"
                        itemDate="2019"
                        itemDateMessage="Conclusion"
                        city="Curitiba | Brazil"
                        itemSize="2"
                    />
                    <CardItem
                        link="https://www.up.edu.br/graduacao/analise-desenvolvimento-sistemas/"
                        logo="positivo-logo.png"
                        itemName="SA/Software Development"
                        itemDate="2017"
                        itemDateMessage="Conclusion"
                        city="Curitiba | Brazil"
                        itemSize="2"
                    />
                    <CardItem
                        link="https://www.sistemafiep.org.br/cursos-tecnicos/cursos/curso-tecnico-em-informatica-18-33358-435343.shtml"
                        logo="senai-logo.png"
                        itemName="Technician in Software Development"
                        itemDate="2013"
                        itemDateMessage="Conclusion"
                        city="Quatro Barras | Brazil"
                        itemSize="2"
                    />
                    <CardItem
                        link="https://www.usjt.br/graduacao/letras-ingles/"
                        logo="unimonte-logo.png"
                        itemName="Modern Languages"
                        itemDate="2005"
                        itemDateMessage="Conclusion"
                        city="Santos | Brazil"
                        itemSize="2"
                    />
                </div>
            </section>
        </>
    );
}