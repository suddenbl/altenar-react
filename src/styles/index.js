import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
    ${normalize}   

    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    h1, h2, h3, h4, p {
        margin: 0;
        padding: 0;
    }
`
