import Home from '@/pages/index'
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe('Home', () => {
  it('renders a pragraph', () => {
    render(<Home />)
    expect(screen.getByText("Get started by editing")).toBeInTheDocument()
  })
})