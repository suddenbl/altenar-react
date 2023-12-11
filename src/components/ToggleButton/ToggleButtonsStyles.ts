import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 10px;
  align-items: center;
`

export const Label = styled.label`
  cursor: pointer;
`

export const TextOne = styled.span`
  /* color: $text-primary; */
  color: #000000;
  font-size: 12px;
  letter-spacing: 0.4px;
`
export const TextTwo = styled(TextOne)`
  color: rgba(0, 0, 0, 0.38);
`

export const Switch = styled.div`
  position: relative;
  width: 50px;
  height: 23px;
  background: #000000;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    width: 17px;
    height: 17px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`
export const Input = styled.input`
  display: none;

  &:checked + ${Switch} {
    background: #e0e0e0;

    &:before {
      transform: translate(26px, -50%);
    }
  }
`