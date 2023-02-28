import "@testing-library/jest-dom/extend-expect"
import {render, screen, cleanup} from "@testing-library/react"
import GenresSection from "../GenresSection";

afterEach(() => { cleanup(); })

test("GenresSection test", () => {
    render(<GenresSection />);
    const genresSection = screen.getByTestId("genres-section");
    
    expect(genresSection).toBeInTheDocument();
    expect(genresSection).toContainHTML('<GenreButton');
});
