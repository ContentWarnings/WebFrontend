import "@testing-library/jest-dom/extend-expect"
import {render, screen, cleanup} from "@testing-library/react"
import TextBox from "../TextBox";

afterEach(() => { cleanup(); })

test("TextBox test", () => {
    render(<TextBox id="test" placeholder="test" type="email" />);
    
    const textBox = screen.getByTestId("text-box");
    
    expect(textBox).toBeInTheDocument();
    expect(textBox).toContainHTML('<input');
});
