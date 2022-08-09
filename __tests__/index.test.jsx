import '@testing-library/jest-dom'

import Home from '../pages/index'
import { render } from '@testing-library/react'

describe("Test Home page", () => {

    // 1.Props => expect the UI => assert the UI attributes 
    // 2. Actions, event (click, submit) => expect the UI behavior, changes 
    // => assert the UI attributes
    // 1,2 => deal with synchronous update and asynchronous update; act(); async await it()
    // 3. Mocking, spying the HTTP requests
    // 4. Cypress for e2e tests
    // 5. Show test coverage report with jest-coverage

    it('Test the tile of Home page', () => {
      const { getByText } = render(<Home products={[]}/>)
    
      expect(getByText("Get Doggy Stickers!")).toBeInTheDocument() // assert for HTML
      expect(getByText("Get Doggy Stickers!")).toHaveStyle('color: #fff')
    })
    
})