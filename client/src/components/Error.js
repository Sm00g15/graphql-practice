import React from "react";

const Error = ({ error }) => {
  const errorMsg = error.message.replace("GraphQL error:", "").trim();
  return <p>{errorMsg}</p>;
};

export default Error;
