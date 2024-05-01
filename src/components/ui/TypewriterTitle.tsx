"use-clientt";
import React from "react";
import Typewriter from "typewriter-effect"; // Import the 'Typewriter' component
type Props = {};

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{ loop: true }}
      onInit={(typewriter) => {
        typewriter.typeString("Get your productivity on steroids.").start();
      }}
    />
  );
};

export default TypewriterTitle;
