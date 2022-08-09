import Home from '../pages/index'
import { render } from '@testing-library/react'

it('renders homepage unchanged', () => {
  const { container } = render(<Home products={[]} />)
  expect(container).toMatchSnapshot()
})
