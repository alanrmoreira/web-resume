import { Divider } from "@mui/material";
import ContactForm from "./ContactForm";
import ContactInfoLg from "./ContactInfoLg";
import ContactInfoSm from "./ContactInfoSm";



export default function Contact(params) {

    

    return (
        <>
            <Divider />
            <section className='inner-section-container' id="contact">
                <h1>Contact</h1>
                <section className="contact-form">
                    <div id="info-frame-lg">
                        <ContactInfoLg />
                    </div>
                    <div id="info-frame-sm">
                        <ContactInfoSm/>
                    </div>
                    <div id="form-frame">
                        <ContactForm />
                    </div>
                </section>
            </section>
        </>
    );
};
