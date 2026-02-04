import Navbar from "../components/Navbar";
import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <Heading>Oops</Heading>
      <Text>{isRouteErrorResponse(error) ? "This page does not exist" : "An unexpected error occured."}</Text>
    </>
  );
};

export default ErrorPage;
