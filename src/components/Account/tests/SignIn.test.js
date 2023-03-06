import "@testing-library/jest-dom/extend-expect"
import {render, screen, cleanup} from "@testing-library/react"
import SignIn from "../SignIn";

afterEach(() => { cleanup(); })

test("SignIn test", () => {
    render(<SignIn />);
    
    const signInComponent = screen.getByTestId("sign-in");
    
    expect(signInComponent).toBeInTheDocument();
    expect(signInComponent).toHaveTextContent('Log In');
    expect(signInComponent).toHaveTextContent('Create Account.');
    expect(signInComponent).toHaveTextContent('Reset Password.');
    expect(signInComponent).toContainHTML('<TextBox ');
    expect(signInComponent).toContainHTML('<Primary2Button ');
});
