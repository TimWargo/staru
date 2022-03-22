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
    );
};

export default ForgotPasswordPage;