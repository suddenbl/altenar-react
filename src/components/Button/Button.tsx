import { FC } from 'react'
import styled from 'styled-components'
import { primaryMainColor, primaryDarkColor } from '../../styles'

export const StyledButton = styled.button`
  display: flex;
  width: 158px;
  height: 42px;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 1px solid ${primaryMainColor};
  border-radius: 4px;
  background-color: ${primaryMainColor};
  color: white;
  cursor: pointer;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${primaryDarkColor};
  }
`

interface ButtonProps {
  children: string
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children.toUpperCase()}</StyledButton>
}
