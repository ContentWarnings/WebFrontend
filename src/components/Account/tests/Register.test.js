import "@testing-library/jest-dom/extend-expect"
import {render, screen, cleanup} from "@testing-library/react"
import Register from "../Register";

afterEach(() => { cleanup(); })

test("Register test", () => {
    render(<Register />);
    
    const registerComponent = screen.getByTestId("register");
    
    expect(registerComponent).toBeInTheDocument();
    expect(registerComponent).toHaveTextContent('Create Account');
    expect(registerComponent).toContainHTML('<TextBox ');
    expect(registerComponent).toContainHTML('<Primary2Button ');
});
