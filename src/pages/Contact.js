import React, { useState } from "react";
import PizzaLeft from "../assets/multiplePizzas.jpeg";
import "../styles/Contact.css";

function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add your form submission logic here, e.g., sending data to a server.

        // Set submitted to true to display the message
        setSubmitted(true);
    };

    return (
        <div className="contact">
            <div
                className="leftSide"
                style={{ backgroundImage: `url(${PizzaLeft})` }}
            ></div>
            <div className="rightSide">
                <h1> Contact Us</h1>

                {submitted ? (
                    <p>Thanks, we will contact you soon!</p>
                ) : (
                    <form id="contact-form" method="POST" onSubmit={handleSubmit}>
                        <label htmlFor="name">Full Name:</label>
                        <input name="name" placeholder="" type="text" />
                        <label htmlFor="email">Email:</label>
                        <input name="email" placeholder="" type="email" />
                        <label htmlFor="message">Message:</label>
                        <textarea
                            rows="6"
                            placeholder="Enter a message..."
                            name="message"
                            required
                        ></textarea>
                        <button type="submit"> Send Message</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Contact;
