import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const ErrorComponents = ({ message }) => {
  return (
    <Alert
      status={"error"}
      left={"50%"}
      position={"fixed"}
      top={"50%"}
      //bottom={"4"}
      transform={"translateX(-50%)"}
      w={"container.xl"}
    >
      <AlertIcon />
      {message}
    </Alert>
  );
};

export default ErrorComponents;
