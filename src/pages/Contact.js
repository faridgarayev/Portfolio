import React from 'react'
import emailjs from 'emailjs-com';
import Title from '../components/Title';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vlngqw6', 'template_e39i5o9', e.target, 'user_HdRqMNVzSD0GKwQsKe3Hi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div className="contact pages">
            <Title titleh6="Feel free to contact me anytimes" titleh1="Get in Touch" />
            <div className="contactContainer">
                <div className="contactRight">
                    <h3>Message Me</h3>
                    <form onSubmit={sendEmail}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="email" placeholder="Email" name="user_email" />
                        <input type="tel" placeholder="Telephone" name="phone_num" />
                        <textarea placeholder="Message" name="message" ></textarea>
                        <input className="submitButton" type="submit" value="Send" />
                    </form>
                </div>
                <div className="contactLeft">
                    <h3>Contact info</h3>
                    <p>Always available for freelance work if the right project comes along, Feel free to contact me!</p>
                    <div className="contactInfo">
                        <div className="contactIcon">
                            <i className="fas fa-signature"></i>
                            <i className="fas fa-map"></i>
                            <i className="fas fa-phone"></i>
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="contactText">
                            <div className="textC">
                                <h6>Name</h6>
                                <p>Farid Garayev</p>
                            </div>
                            <div className="textC">
                                <h6>Location</h6>
                                <p>Baku,Azerbaijan</p>
                            </div>
                            <div className="textC">
                                <h6>Call Me</h6>
                                <p>051-644-32-64</p>
                            </div>
                            <div className="textC">
                                <h6>Email Me</h6>
                                <p>farid.garayev.1@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
