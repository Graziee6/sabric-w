import React from 'react'
import Form from "./../components/form";

function login() {
    const formHeading = "welcome back!";
    const p1 = "Don't have an account?";
    const p2 = "Create free account";
    const buttonText = "create account";
    const linkTo = "/signup.js"
    return (
      <div className="w-full justify-center m-auto align-middle items-center text-center bg-gray-100 flex flex-col flex-grow">
        <Form formHeading={formHeading} p1={p1} p2={p2} link={linkTo} buttonText={buttonText} />
      </div>
    );
}

export default login