import React from "react";
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../assets/Lottie.json";

const Loiter = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true
  };

  const { View } = useLottie(options);

  return <div className="h-14">{View}</div>;
};

export default Loiter;
