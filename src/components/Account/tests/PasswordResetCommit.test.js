import "@testing-library/jest-dom/extend-expect"
import {render, screen, cleanup} from "@testing-library/react"
import PasswordResetCommit from "../PasswordResetCommit";

afterEach(() => { cleanup(); })

test("PasswordResetCommit test", () => {
    render(<PasswordResetCommit />);
    
    const pwResetCommit = screen.getByTestId("password-reset-commit");
    
    expect(pwResetCommit).toBeInTheDocument();
    expect(pwResetCommit).toContainHTML('<MMHappy ');
    expect(pwResetCommit).toContainHTML('<TextBox ');
    expect(pwResetCommit).toContainHTML('<Primary2Button ');
});
