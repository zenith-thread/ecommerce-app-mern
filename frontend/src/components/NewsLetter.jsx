import React from "react";

// Components
import Button from "./Button";

const NewsLetter = React.memo(() => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center my-20 px-5 sm:px-0">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        aliquid?
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />
        <Button type="submit" classname="btn">
          SUBSCRIBE
        </Button>
      </form>
    </div>
  );
});

export default NewsLetter;
