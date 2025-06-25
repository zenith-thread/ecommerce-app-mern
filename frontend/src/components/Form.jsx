import React, { useState } from "react";

// Components
import Button from "./Button";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
};

const FORM_STATE_TYPES = {
  logIn: "Log In",
  signUp: "Sign Up",
};

const Form = React.memo(() => {
  const [currentState, setCurrentState] = useState(FORM_STATE_TYPES.logIn);
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { name, email, password } = formFields;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const changeFormState = (stateType) => {
    setCurrentState(stateType);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    console.log("Submitting the form with form values: ", formFields);
    setFormFields(defaultFormFields);
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === FORM_STATE_TYPES.signUp && (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChangeHandler}
          required
        />
      )}

      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChangeHandler}
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Passwrd"
        name="password"
        value={password}
        onChange={onChangeHandler}
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password</p>
        {currentState === FORM_STATE_TYPES.logIn ? (
          <p
            onClick={() => changeFormState(FORM_STATE_TYPES.signUp)}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => changeFormState(FORM_STATE_TYPES.logIn)}
            className="cursor-pointer"
          >
            Login here
          </p>
        )}
      </div>
      <Button type="submit" classname="btn !min-w-full">
        {currentState === FORM_STATE_TYPES.logIn ? "Log In" : "Sign Up"}
      </Button>
    </form>
  );
});

export default Form;
