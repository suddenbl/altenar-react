import styled from 'styled-components'

const StyledButton = styled.button`
  display: flex;
  width: 158px;
  height: 42px;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 1px solid #2196f3;
  border-radius: 4px;
  background-color: #2196f3;
  color: white;
  cursor: pointer;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0b79d0;
  }
`

export const Button = ({ children }: any) => {
  return <StyledButton>{children.toUpperCase()}</StyledButton>
}
