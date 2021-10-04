import { render, screen } from "@testing-library/react";
import LoginForm from "../Login";

describe("Login", () => {

    test("should render the basic fields", () => {
        render(<LoginForm />);
        expect(
            screen.getByTestId("email-field")
        ).toBeInTheDocument();
        expect(
            screen.getByTestId("password-field")
        ).toBeInTheDocument();
        expect(
            screen.getByTestId("submit-button")
        ).toBeInTheDocument();
    });

});