import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { mockData } from '../api/mocks';
import { UserComponent } from "./user.component";

describe('UserComponent', () => {
  it('should render correctly' , () => {
    const { asFragment } = render(<UserComponent users={mockData} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render header title' , () => {
    render(<UserComponent users={mockData} />)
    expect(screen.getAllByRole('heading', { level: 1, name: 'User' })[0]).toBeInTheDocument()
  })
})
