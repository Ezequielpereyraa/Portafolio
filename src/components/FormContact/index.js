import React from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";
import Contacto from "../Contacto";
import Swal from "sweetalert2";

export default function ContactUs() {
  document.title = "GEP | Contacto";
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ng8kgdg",
        "template_mgmd8qt",
        e.target,
        "user_DPaP4IBPN43Fmi8ev2UB1"
      )
      .then(
        (result) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Email enviado correctamente!",
            showConfirmButton: false,
            timer: 3000,
          });
          document.querySelector("form").reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="container">
      <h3>Contacto</h3>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Nombre</label>
        <input required type="text" name="to_name" />
        <label>Asunto</label>
        <input required type="text" name="affair" />
        <label>Email</label>
        <input required type="email" name="from_name" />
        <label>Tu Mensaje</label>
        <textarea name="message" />
        <input required type="submit" value="Enviar" />
      </form>
      <div className="container__contact">
        <Contacto />
      </div>
    </div>
  );
}
