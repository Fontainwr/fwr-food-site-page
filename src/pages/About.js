import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import '../styles/About.css'


function About() {
    return (
        <div className="about">
        <div
            className="aboutTop"
            style={{ backgroundImage: `url(${MultiplePizzas})` }}
        ></div>
        <div className="aboutBottom">
            <h1> ABOUT US</h1>
            <p>Welcome to Soulful Delights: A Taste of Home!At Soulful Delights, 
                we're not just a restaurant; we're a culinary journey through the 
                heart and soul of Southern cuisine. Established in 2023, we've 
                been serving up mouthwatering soul food dishes that will 
                transport you to the Soul Train kitchen with every bite.

                Our menu boasts a wide array of Southern classics, from tender fried 
                chicken and crispy catfish to succulent collard greens, creamy macaroni 
                and cheese, and heavenly peach cobbler. We also offer vegan and vegetarian
                options, ensuring that everyone can savor the soulful experience.

            </p>
        </div>
        </div>
    );
}

export default About;
