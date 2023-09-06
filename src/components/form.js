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
    <div className="w-11/12 md:h-screen flex flex-col justify-center items-center text-center p-4 align-middle">
      <div className="bg-transparent py-12 flex flex-col justify-center items-center">
        <img src="./../assets/sabric-logo.png" alt="sabric logo" />
      </div>
      <div className="flex flex-col gap-3 mb-12">
        <h1 className="font-bold flex-auto capitalize text-black text-4xl py-2">
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
  );
}

export default form;
