import React, { useState } from 'react';

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: ""
    });

    const onChangeHandler = (event) => {

        const {name, value} = event.target;

        setData((preValues) => {
            return {
                ...preValues,
                [name]:value
            }
        });
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        alert(`My name is ${data.fullname}. My phone number ${data.phone} and email is ${data.email}. I want to say ${data.msg}`);
    }



    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmitHandler}>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={onChangeHandler}
                                    placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone Number</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="phone"
                                    value={data.phone}
                                    onChange={onChangeHandler}
                                    placeholder="Enter your phone no." />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={data.email}
                                    onChange={onChangeHandler}
                                    placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    name="msg"
                                    value={data.msg}
                                    onChange={onChangeHandler}
                                    placeholder="Your message for PunsayTech.... ">
                                </textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;