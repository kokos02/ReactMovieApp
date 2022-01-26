import { render, screen } from "@testing-library/react"
import SelectedMovie from "./selectedMovie";
import '@testing-library/jest-dom/extend-expect';


test('Check if the component renders normally with no errors', () => {
    render(<SelectedMovie selected = {{poster_path: 'lalalla', title: 'titlos', overview: "a movie description", release_date: "12/12/2022"}}/>)

    screen.debug();
})

test('Check if the image starts with opacity equal to zero', () => {
    render(<SelectedMovie selected = {{poster_path: 'lalalla', title: 'titlos', overview: "a movie description", release_date: "12/12/2022"}}/>)

    expect(screen.getByRole("img")).toHaveStyle('opacity: 0');
})