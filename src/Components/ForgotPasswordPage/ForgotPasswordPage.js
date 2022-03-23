import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const ForgotPasswordPage = () => {
    const [name, setName] = useState();
    const [confirm, setConfirm] = useState(false);

    const handleOnChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setName(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirm(true);
        console.log(name);
    };

     if (confirm) {
        return (
            <Navigate
                to={{
                    pathname: "/reset",
                }}
            />
        );
    }

    return (
        <>

            <h1> Forgot Password? </h1>

            <p> Enter your email below and we will send you a link to reset your password. </p>

            <div>
                <form onSubmit={handleSubmit}>
                    <input
                    type='text'
                    name='email'
                    placeholder='Email'
                    onChange={handleOnChange}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    );
};

export default ForgotPasswordPage;