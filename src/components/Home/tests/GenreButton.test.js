// References
// https://www.youtube.com/watch?v=ML5egqL3YFE
// https://stackoverflow.com/questions/62951078/got-typeerror-expect-tobeinthedocument-is-not-a-function-even-after-proper

import "@testing-library/jest-dom/extend-expect"
import {render, screen, cleanup} from "@testing-library/react"
import GenreButton from "../GenreButton";

afterEach(() => { cleanup(); })

test("GenreButton test", () => {
    render(<GenreButton name={"Adventure"}/>);
    const gbElement = screen.getByTestId("genre-button");
    
    // ensures genre button exists inside DOM
    expect(gbElement).toBeInTheDocument();

    // regex from documentation page that matches whole string
    expect(gbElement).toHaveTextContent(/^Adventure$/);

    expect(gbElement).toContainHTML("</div>");
});
