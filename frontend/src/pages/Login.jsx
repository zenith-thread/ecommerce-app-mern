import React, { lazy } from "react";

// Components
const Form = lazy(() => import("../components/Form"));

const Login = React.memo(() => {
  return (
    <div className="px-4 sm:px-[3vw] md:px[5vw] lg:px-[7vw]">
      <Form />
    </div>
  );
});

export default Login;
