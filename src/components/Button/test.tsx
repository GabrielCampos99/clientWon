import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render medium size button by default', () => {
    renderWithTheme(<Button>Comprar</Button>)
    expect(screen.getByRole('button', { name: /Comprar/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
  })

  it('should render small size button when passed', () => {
    renderWithTheme(<Button size="small">Comprar</Button>)
    expect(screen.getByRole('button', { name: /Comprar/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render large size button when passed', () => {
    renderWithTheme(<Button size="large">Comprar</Button>)
    expect(screen.getByRole('button', { name: /Comprar/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem'
    })
  })

  it('should render fullWidth button when passed', () => {
    renderWithTheme(<Button fullWidth>Comprar</Button>)
    expect(screen.getByRole('button', { name: /Comprar/i })).toHaveStyle({
      width: '100%'
    })
  })
})
