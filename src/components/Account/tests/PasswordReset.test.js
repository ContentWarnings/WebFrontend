import "@testing-library/jest-dom/extend-expect"
import {render, screen, cleanup} from "@testing-library/react"
import PasswordReset from "../PasswordReset";

afterEach(() => { cleanup(); })

test("PasswordReset test", () => {
    render(<PasswordReset />);
    
    const pwReset = screen.getByTestId("password-reset");
    
    expect(pwReset).toBeInTheDocument();
    expect(pwReset).toHaveTextContent("Reset Password");
    expect(pwReset).toContainHTML('<MMHappy ');
    expect(pwReset).toContainHTML('<TextBox ');
});
