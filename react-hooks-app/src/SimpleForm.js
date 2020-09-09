import React, { useState } from 'react';

const SimpleForm = () => {

    const [fullName, SetFullName] = useState(() => {
        return{
            fname: "",
            lname: "",
        }
    });

    const inputOnchangeHandler = (event) => {
        
        const value = event.target.value;
        const name = event.target.name;

        SetFullName((preValue)=>{
            if(name==='fname'){
                return {
                    fname: value,
                    lname: preValue.lname
                }
            }
            else if(name==='lname'){
                return {
                    fname: preValue.fname,
                    lname: value
                }
            }
        });
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
    
    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
            <div className='main__div'>
                <h1>Hello {fullName.fname} {fullName.lname}</h1>
                <input
                    type="text"
                    placeholder="Please enter your first name here"
                    value={fullName.fname}
                    name='fname'
                    onChange={inputOnchangeHandler} />

                    <input
                    type="text"
                    placeholder="Please enter your last name here"
                    value={fullName.lname}
                    name = 'lname'
                    onChange={inputOnchangeHandler} />
                    
                <button type='submit'>Submit 👍 </button>
            </div>
            </form>
        </>

    );
}

export default SimpleForm;