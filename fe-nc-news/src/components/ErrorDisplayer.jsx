import React from "react";

const ErrorDisplayer = ({ err }) => {
  console.log("in error");
  return (
    <article>
      <h3>{err ? err : "Path Not Found"}</h3>
    </article>
  );
};

export default ErrorDisplayer;