import React from 'react'
import './Style/Contact.css'

function Contact() {
    return (
        <div class="container-fluid main-section  bg-dark">
            <div class="container">
                <div class="heading">
                    <h2>Contact Us</h2>

                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="contact-info">
                            <div class="contact-left">
                                <h3>Email</h3>
                                <a href="mailto:dhirajdesale8780@gmail.com">dhirajdesale8780@gmail.com</a> <a href="mailto:support@dezven.com">support@dd87.com</a> </div>
                            <div class="contact-left">
                                <h3>Visit My Studio</h3>
                                <p>Warnwe Park, Karve Nagar,<br />
                                    Pune 415101</p>
                            </div>
                            <div class="contact-left">
                                <h3>Phone</h3>
                                <p>+91 9689848801</p>
                            </div>
                            <ul>
                                <li><a href="https://www.facebook.com/dezven/" target="_blank" rel="noreferrer"><i class="fa fa-facebook-square"></i></a></li>
                                <li><a href="https://www.instagram.com/dezvengroup/" target="_blank" rel="noreferrer"><i class="fa fa-instagram"></i></a></li>
                                <li><a href="https://www.youtube.com/@dezvengroup" target="_blank" rel="noreferrer"><i class="fa fa-youtube-square"></i></a></li>
                                <li><a href="https://twitter.com/Dezven" target="_blank" rel="noreferrer"><i class="fa fa-twitter-square"></i></a></li>

                                <li><a href="https://www.linkedin.com/company/dezvengroup/" target="_blank"><i class="fa fa-linkedin-square"></i></a></li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-md-8 res-mt">
                        <div class="contact-form">
                            <h3>Get In Touch</h3>
                            <div class="row mt-4">
                                <div class="col-md-6 col-12 mt-4">
                                    <input type="text" course-listplaceholder="Your Name *" class="form-control" />
                                </div>
                                <div class="col-md-6 col-12 mt-4">
                                    <input type="text" course-listplaceholder="Your Email *" class="form-control" />
                                </div>
                                <div class="col-md-12 col-12 mt-4">
                                    <input type="text" course-listplaceholder="Your Subject *" class="form-control" />
                                </div>
                                <div class="col-md-12 col-12 mt-4">
                                    <textarea placeholder="Your Message *" class="form-control"> </textarea>
                                </div>
                                <div class="col-md-12 col-12  mt-4">
                                    <button class="btn btn-danger btn-lg">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
