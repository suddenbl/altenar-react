import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const fontSizeNormal = '14px'
export const textPrimary = '#000000'
export const textSecondary = 'rgba(0, 0, 0, 0.54)'
export const textDisabled = 'rgba(0, 0, 0, 0.38)'

export const primaryMainColor = '#2196f3'
export const primaryDarkColor = '#0b79d0'
export const errorColor = ' #f44336'
export const grey300Color = '#e0e0e0     '
export const grey900Color = '#212121'
export const scrollColor = '#bdbdbd'

export const GlobalStyle = createGlobalStyle`
    ${normalize}   

    * {
        box-sizing: border-box;        
        &::-webkit-scrollbar {
            margin-right: -12px;
            width: 4px;
            height: 8px;
            background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
            height: 1px;
            border-radius: 10px;
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
