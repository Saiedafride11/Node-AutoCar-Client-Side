import React from 'react';
import './Contact.css';

const Contact = () => {
    document.title = 'Contact Us';
    return (
            <div className="contact py-5">
                <div className="container">
                    <h2 className="text-center py-1" style={{color: '#1976d2'}}>Contact Us</h2>
                    <form className="row g-3 p-5">
                        <div className="col-md-6">
                            <label htmlFor="fName" className="form-label" style={{color :'#1976d2'}}>First Name</label>
                            <input type="text" placeholder="First Name..." className="form-control" id="fName"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="lName" className="form-label" style={{color :'#1976d2'}}>Last Name</label>
                            <input type="text" placeholder="Last Name..." className="form-control" id="lName"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label" style={{color :'#1976d2'}}>Email</label>
                            <input type="email" placeholder="Email..." className="form-control" id="email"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phone" className="form-label" style={{color :'#1976d2'}}>Phone</label>
                            <input type="text" placeholder="Phone..." className="form-control" id="phone"/>
                        </div>
                        <div className="col-12">
                            <textarea className="w-100 p-2" style={{height:'100px'}} placeholder="Message...">

                            </textarea>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn w-25 text-white"  style={{backgroundColor: '#1976d2'}}>Send Message</button>
                        </div>
                    </form>

                    <div className="contact-us text-center text-white p-3">
                        <div>
                            <h4>Address</h4>
                            <p>H3556 Beech Street, San Francisco, USA</p>
                        </div>
                        <div>
                            <h4>Phone</h4>
                            <p>+1 315 369 5943</p>
                        </div>
                        <div>
                            <h4>Email</h4>
                            <p>hello@tourx.com</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Contact;