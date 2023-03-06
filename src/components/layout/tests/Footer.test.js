import "@testing-library/jest-dom/extend-expect"
import {render, screen, cleanup} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer";

afterEach(() => { cleanup(); })

test("Footer test", () => {
    render(
        <BrowserRouter>
        <Footer />
        </BrowserRouter>
    );
    const footer = screen.getByTestId("footer");
    
    expect(footer).toBeInTheDocument();
    expect(footer).toContainHTML('<Link');
});
