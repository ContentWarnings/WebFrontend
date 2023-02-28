import "@testing-library/jest-dom/extend-expect"
import {render, screen, cleanup} from "@testing-library/react"
import SearchBar from "../SearchBar";

afterEach(() => { cleanup(); })

test("SearchBar test", () => {
    render(<SearchBar />);
    const searchElement = screen.getByTestId("search-bar");
    
    // ensures search button exists inside DOM
    expect(searchElement).toBeInTheDocument();

    // ensure button & input tags exist within
    expect(searchElement).toContainHTML("<Primary2Button");
    expect(searchElement).toContainHTML('<input type="text"');
});
