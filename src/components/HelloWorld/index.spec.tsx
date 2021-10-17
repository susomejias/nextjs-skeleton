import React from 'react'
import {render, screen} from '@testing-library/react'

import HelloWorld from "./index";

describe('<HelloWorld/>', () => {
    it('Should see Hello World text', async () => {
        render(<HelloWorld />)
        const helloWorldText = await screen.findByText(/Hello World/i)
        expect(helloWorldText).toBeInTheDocument()
    })
})
