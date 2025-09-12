import { Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function ContactForm(params) {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4gnn59j', 'template_mga6b9i', e.target, 'Pyj2SYyTA7pMMpTeZ').then(

            Swal.fire({
                icon: "success",
                title: "Your message has been sent!",
                showConfirmButton: false,
                timer: 3000
            }).then((result) => {

                window.location.reload();

            })


        );
    }
    return (
        <>
            <form className="contact-form" onSubmit={sendEmail}>

                <input type="text" id="name" name="from_name" placeholder="Name" className="form-item" />
                <input type="tel" id="phone" name="from_phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="000-000-0000" className="form-item" />
                <input type="email" id="email" name="from_email" placeholder="E-mail" className="form-item" />
                <textarea id="message" name="from_message" placeholder="Message" className="form-item"></textarea>
                <Button variant="contained" color="success" className="form-item" type="submit">
                    Send
                </Button>
            </form>
        </>
    );
};
