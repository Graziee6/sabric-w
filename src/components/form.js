import React from "react";
import Input from "./input";
import TextArea from "./textArea";
import Button from "./button";
import AlternateText from "./alternateText";

function form({ formHeading, buttonText, p1, link, p2 }) {
  const inputType1 = "text";
  const inputType2 = "email";
  const placeholder1 = "your name";
  const placeholder2 = "your email";
  const textAreaPlaceholder = "password";
  
  return (
    <div className="w-11/12 md:w-9/12 md:min-h-screen flex flex-col justify-center lg:justify-start lg:items-start lg:text-start items-center text-center p-4 align-middle lg:w-full lg:flex-row lg:gap-6 lg:p-0">
      <div
        className="w-0 lg:w-1/2 lg:min-h-screen bg-repeat-y lg:flex lg:flex-col flex-1 bg-[url]  bg-cover bg-center" style={{backgroundImage:`url("./assets/lg-bg-img.png")`}}
      >
        {/* <img src="" alt="" className="lg:w-full lg:h-full lg:min-h-screen bg-repeat-y object-cover object-center lg:flex-auto"/> */}
      </div>
      <div className="lg:w-1/2">
        <div className="bg-transparent py-12 flex flex-col justify-center items-center lg:items-start lg:justify-start lg:px-4">
          <img src="./assets/sabric-logo.png" alt="sabric logo" />
        </div>
        <div className="flex flex-col gap-3 mb-12 lg:items-start lg:justify-start lg:w-9/12">
          <h1 className="font-bold flex-auto capitalize text-black text-4xl lg:text-5xl py-2">
            {formHeading}
          </h1>
          <p className=" font-normal flex-auto text-black text-medium">
            When, while lovely valley teems with vapour around atlas meant
            meridian the upper impenetrable.
          </p>
        </div>

        <form method="POST" action="#" className="flex flex-col gap-4 w-full">
          <Input inputType={inputType1} inputPlaceholder={placeholder1} />
          <Input inputType={inputType2} inputPlaceholder={placeholder2} />
          <TextArea placeholder={textAreaPlaceholder} />
          <Button buttonText={buttonText} />
        </form>

        <AlternateText p1={p1} link={link} p2={p2} />
      </div>
    </div>
  );
}

export default form;
