import React from "react";
import { Button } from "../components/Button/Button";
import { Input } from "../components/Input/Input";
import {InputName} from "../components/Input/InputName"

export const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <h1>Добро пожаловать в квиз от лучшего учебного центра</h1>
          <form className="welcome__form">
            <Input/>
           <InputName/>
            <Button text="Далее"/>
          </form>
        </div>
      </div>
    </div>
  );
};

