import React, { useState } from 'react';

const SimpleForm = () => {

    const [userDetails, SetUserDetails] = useState(() => {
        return {
            fname: "",
            lname: "",
            email: "",
            mobno: ""
        }
    });

    const inputOnchangeHandler = (event) => {
        
        const {value, name} = event.target;

        SetUserDetails((preValue)=>{

            return{
                ...preValue,
                [name]: value
            }

            // if(name==='fname'){
            //     return {
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         mobno: preValue.value,
            //         fname: value
            //     }
            // }
            // else if(name==='lname'){
            //     return {
            //         fname: preValue.fname,
            //         email: preValue.email,
            //         mobno: preValue.value,
            //         lname: value
            //     }
            // }
            // else if(name==='email'){
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         mobno: preValue.value,
            //         email: value
            //     }
            // }
            // else if(name==='mobno'){
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         mobno: value
            //     }
            // }

        });
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        alert("Form Submitted");
    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
            <div className='main__div'>
                <h1>Hello {userDetails.fname} {userDetails.lname}</h1>
                <p>{userDetails.email}</p>
                <p>{userDetails.mobno}</p>
                <input
                    type="text"
                    placeholder="Please enter your first name here"
                    value={userDetails.fname}
                    name='fname'
                    onChange={inputOnchangeHandler} />

                    <input
                    type="text"
                    placeholder="Please enter your last name here"
                    value={userDetails.lname}
                    name = 'lname'
                    onChange={inputOnchangeHandler} />

                    <input
                    type="email"
                    placeholder="Please enter your email here"
                    value={userDetails.email}
                    name = 'email'
                    onChange={inputOnchangeHandler} />

                    <input
                    type="number"
                    placeholder="Please enter your mobile number here"
                    value={userDetails.mobno}
                    name = 'mobno'
                    onChange={inputOnchangeHandler} />
                    
                <button type='submit'>Submit 👍 </button>
            </div>
            </form>
        </>

    );
}

export default SimpleForm;