import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
  it('renders a parghraph', () => {
    render(<Home />)

    const text = screen.getByText('Get started by editing')

    expect(text).toBeInTheDocument()
  })
})
