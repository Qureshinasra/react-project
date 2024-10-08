import React from 'react'
import Header from '../layout/header'
import H from '../../assets/27.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';



const contact = () => {
  return (
    <>
    <Header />
    <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h2 className="text-primary">Contact Us</h2>
                    <p className="text-secondary">We would love to hear from you! Please fill out the form below:</p>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">password</label>
                            <input type="password" className="form-control" id="password" required />
                            </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-success">Send Message</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <img src={H} height={400} width={300}></img>
                </div>
            </div>
        </div>
    </>
  )
}

export default contact