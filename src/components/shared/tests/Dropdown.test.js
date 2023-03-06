import "@testing-library/jest-dom/extend-expect"
import {render, screen, cleanup} from "@testing-library/react"
import Dropdown from "../Dropdown";

afterEach(() => { cleanup(); })

test("Dropdown test", () => {
    render(
        <Dropdown
          id="test"
          options={[
            {"display": "Test1", "value": "Test1"},
            {"display": "Test2", "value": "Test2"},
          ]}
          label="Testing"
          default="Test1"
          handleChange={() => {}}
        />
    );
    
    const dropDown = screen.getByTestId("dropdown");
    
    expect(dropDown).toBeInTheDocument();
    expect(dropDown).toContainHTML('<label');
    expect(dropDown).toContainHTML('<select');
});
