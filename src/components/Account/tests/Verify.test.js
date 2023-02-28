import "@testing-library/jest-dom/extend-expect"
import {render, screen, cleanup} from "@testing-library/react"
import Verify from "../Verify";

afterEach(() => { cleanup(); })

test("Verify test", () => {
    render(<Verify />);
    
    const verifyComponent = screen.getByTestId("verify");
    
    expect(verifyComponent).toBeInTheDocument();
    expect(verifyComponent).toContainHTML('<MMHappy ');
    expect(verifyComponent).toContainHTML('<Primary2Button ');
});
