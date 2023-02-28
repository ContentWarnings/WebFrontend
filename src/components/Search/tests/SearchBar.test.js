import "@testing-library/jest-dom/extend-expect"
import {render, screen, cleanup} from "@testing-library/react"
import SearchBar from "../SearchBar";

afterEach(() => { cleanup(); })

test("SearchBar test", () => {
    render(<SearchBar />);

    const searchBar = screen.getByTestId("search-bar-2");
    
    expect(searchBar).toBeInTheDocument();
    expect(searchBar).toContainHTML('<Primary2Button');
    expect(searchBar).toContainHTML('<Dropdown');
});
