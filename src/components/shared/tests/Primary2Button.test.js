import "@testing-library/jest-dom/extend-expect"
import {render, screen, cleanup} from "@testing-library/react"
import Primary2Button from "../Primary2Button";

afterEach(() => { cleanup(); })

test("Primary2Button Role=Button test", () => {
    render(<Primary2Button name="Test1" role="button" />);
    
    const button = screen.getByTestId("primary2-button");
    
    expect(button).toBeInTheDocument();
    expect(button).toContainHTML('<button');
    expect(button).toHaveTextContent(/^Test1$/)
});
