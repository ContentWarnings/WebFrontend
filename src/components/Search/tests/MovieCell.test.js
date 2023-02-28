import "@testing-library/jest-dom/extend-expect"
import {render, screen, cleanup} from "@testing-library/react"
import MovieCell from "../MovieCell";

afterEach(() => { cleanup(); })

test("MovieCell test", () => {
    render(
        <MovieCell 
            id={1}
            name={"Superman"}
            desc={"Superhero movie"}
            img={"placeholder"}
            genres={["Action", "Adventure"]}
            normalTriggers={["Trigger1"]}
            flaggedTriggers={["Trigger2"]}
            releaseDate={"2000-04-20"}
            runtime={120}
            mpa={"R"}
        />
    );

    const movieCell = screen.getByTestId("movie-cell");
    
    expect(movieCell).toBeInTheDocument();
    expect(movieCell).toContainHTML('<img');
    expect(movieCell).toContainHTML('<GenreCell');
    expect(movieCell).toContainHTML('<CWCell');
});
