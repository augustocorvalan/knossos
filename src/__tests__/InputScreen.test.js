import { render, screen } from "@testing-library/react"
import InputScreen from "../InputScreen"

test("render input screen", () => {
    render(<InputScreen />)
    const ctaElement = screen.getByText(/Make Model/i)
    expect(ctaElement).toBeInTheDocument()
})
