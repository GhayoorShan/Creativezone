import React, { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";
import contactImg from "../images/contact-us.jpg";

const Contact = () => {
  init("HU-GemWmS3JNYadqO");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eg9yhij",
        "template_f7w29in",
        form.current,
        "HU-GemWmS3JNYadqO"
      )
      .then(
        (result) => {
          e.target.user_name.value = "";
          e.target.user_email.value = "";
          e.target.user_number.value = "";

          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="row ">
        <div className="col-sm-6 ">
          <img src={contactImg} className="banner-image" alt="banner" />
        </div>
        <div className="col-sm-6 form-container">
          <p>CONTACT US</p>
          <form ref={form} onSubmit={sendEmail}>
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input
                type="text"
                name="user_name"
                class="form-control form-control-lg"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Mobile</label>
              <input
                type="phone"
                name="user_number"
                class="form-control form-control-lg"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input
                type="email"
                name="user_email"
                class="form-control form-control-lg"
              />
            </div>
            <div class="d-grid py-2">
              <button
                class="btn btn-lg  rounded-pill button-default__color "
                type="submit"
                value="Send"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
