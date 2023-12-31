import styled from 'styled-components';
import { primaryMainColor, textSecondary } from '../../styles';

export interface StyledInputProps {
  textarea?: boolean;
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 30px;
`;

export const FormContainer = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 17px 11px;
  padding-right: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  &:hover {
    outline: none;
  }
  &:focus {
    outline: 1px solid ${primaryMainColor};
  }
`;
export const StyledInputWithSvg = styled(StyledInput)`
  padding-left: 45px;
`;

export const StyledImg = styled.img`
  position: absolute;
  top: 15px;
  left: 15px;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 131px;
  padding: 17px 11px;
  padding-right: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  resize: none;
  &:hover {
    outline: none;
  }
  &:focus {
    outline: 1px solid ${primaryMainColor};
  }
`;

export const FormInputDescription = styled.span`
  position: absolute;
  top: 20px;
  right: 17px;
  color: ${textSecondary};
`;
