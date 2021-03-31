import { render, screen } from "@testing-library/react"
import GenerationScreen from "../GenerationScreen"

test("render generation screen", () => {
    render(<GenerationScreen />)
    const linkElement = screen.getByText(/Generate/i)
    expect(linkElement).toBeInTheDocument()
})
