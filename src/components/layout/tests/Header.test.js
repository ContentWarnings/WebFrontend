import "@testing-library/jest-dom/extend-expect"
import {render, screen, cleanup} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

afterEach(() => { cleanup(); })

test("Header test", () => {
    render(
        <BrowserRouter>
        <Header />
        </BrowserRouter>
    );
    const header = screen.getByTestId("header");
    
    expect(header).toBeInTheDocument();
    expect(header).toContainHTML('<FaSearch ');
    expect(header).toContainHTML('<Settings ');
    expect(header).toContainHTML('<MMLogo ');
});
