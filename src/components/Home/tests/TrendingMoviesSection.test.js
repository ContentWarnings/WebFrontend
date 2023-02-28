import "@testing-library/jest-dom/extend-expect"
import {render, screen, cleanup} from "@testing-library/react"
import TrendingMoviesSection from "../TrendingMoviesSection";

afterEach(() => { cleanup(); })

test("TrendingMoviesSection test", () => {
    render(<TrendingMoviesSection />);
    const trendingMovies = screen.getByTestId("trending-movies");
    
    expect(trendingMovies).toBeInTheDocument();
    expect(trendingMovies).toContainHTML('<Primary2Button');

    // ensure API is being hit
    expect(trendingMovies).toContainHTML('<MovieButton');
});
