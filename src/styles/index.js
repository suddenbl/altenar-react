import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
    ${normalize}   

    * {
        box-sizing: border-box;
        /* overflow-y: hidden; */
        
        &::-webkit-scrollbar {
            margin-right: -12px;
            width: 4px;
            height: 8px;
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
            height: 1px;
            border-radius: 10px;
            /* background-color: $scroll-color; */
            background-color: #bdbdbd;
        }

        &::-webkit-scrollbar-track {
            background-color: transparent;
        }

        scrollbar-width: thin;
        scrollbar-color: #888 #f1f1f1;
    }

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
