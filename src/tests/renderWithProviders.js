
import React from "react";
import { render } from "@testing-library/react";
import { MyProvider } from "../context/context";
import { BrowserRouter as Router } from "react-router-dom";

export const renderWithProviders = (children) => {
  return render(<Router><MyProvider>{children}</MyProvider></Router>);
};