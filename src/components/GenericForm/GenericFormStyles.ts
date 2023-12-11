import styled from 'styled-components'

export interface StyledInputProps {
  textarea?: boolean
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 17px 11px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  &:hover {
    outline: 1px solid #2196f3;
  }
`
export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 131px;
  padding: 17px 11px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  resize: none;

  &:hover {
    outline: 1px solid #2196f3;
  }
`

export const FormInputDescription = styled.span`
  position: absolute;
  top: 20px;
  right: 17px;
  color: rgba(0, 0, 0, 0.54);
`
