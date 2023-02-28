import "@testing-library/jest-dom/extend-expect"
import {render, screen, cleanup} from "@testing-library/react"
import GenreCell from "../GenreCell";

afterEach(() => { cleanup(); })

test("GenreCell test", () => {
    render(<GenreCell genre={"Action"} />);
    
    const genreCell = screen.getByTestId("genre-cell");
    
    expect(genreCell).toBeInTheDocument();
    expect(genreCell).toHaveTextContent(/^Action$/);
    expect(genreCell).toContainHTML('<img');
});
