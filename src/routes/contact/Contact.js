import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | MBF NEWDAWN ENTERPRISES";
  }, []);

  return (
    <motion.main
      className="contact"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}
    >
      <section className="contact-success">
        <p>We have received your message and will get back to you shortly! </p>
        <section>
          <Link className="active-button-style" to="/menu">Go to menu</Link>
        </section>
      </section>
      <section className="contact-us-img"></section>
      <section className="contact-us-content pop-font">
        <section className="contact-us-content-txt">
          <h2>Contact us</h2>
          <p>
            We greatly anticipate your response and are eager to receive any inquiries you might have. Please do not hesitate to reach out to us should you require any further clarification or assistance. Your feedback and questions are of utmost importance to us, and we are here to provide the support you need. Looking forward to hearing from you!
          </p>
        </section>
      </section>
    </motion.main>
  );
}

export default Contact;
