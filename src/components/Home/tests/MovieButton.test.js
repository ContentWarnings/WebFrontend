import "@testing-library/jest-dom/extend-expect"
import {render, screen, cleanup} from "@testing-library/react"
import MovieButton from "../MovieButton";

afterEach(() => { cleanup(); })

test("MovieButton test", () => {
    render(<MovieButton name={"Superman"} id={1} image={"placeholder"}/>);
    const movieButton = screen.getByTestId("movie-button");
    
    expect(movieButton).toBeInTheDocument();
    expect(movieButton).toHaveTextContent(/^Superman$/);
    expect(movieButton).toContainHTML('<img');
});
