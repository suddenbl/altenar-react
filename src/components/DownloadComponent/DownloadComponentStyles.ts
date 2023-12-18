import styled from 'styled-components';
import {
  textDisabled,
  primaryMainColor,
  textSecondary,
  errorColor,
  errorBackground,
  textPrimary,
} from '../../styles';
import { buttonReset } from '../../styles/mixins';

export const DownloadLabel = styled.label<{ $error: boolean }>`
  position: relative;
  border: ${(props) => (props.$error ? `2px dashed ${errorColor}` : `2px dashed ${textDisabled}`)};
  padding: 35px 37px 30px;
  display: flex;
  gap: 16px;
  transition: border 0.3s ease-in-out;

  &:active {
    border: 2px dashed ${primaryMainColor};
  }
`;

export const DownloadInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  outline: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 100;
`;

export const DownloadTextFirst = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

export const DownloadTextSecond = styled.span`
  color: ${primaryMainColor};
`;

export const DownloadTextThird = styled.p`
  font-size: 12px;
  color: ${textSecondary};
`;

export const ErrorSpan = styled.span`
  position: absolute;
  bottom: -23px;
  right: 30%;
  padding: 5px;
  font-size: 10px;
  color: ${errorColor};
  background-color: ${errorBackground};
  border-radius: 4px;
`;

export const DownloadModalWindow = styled.div`
  position: absolute;
  padding-left: 30px;
  left: -3px;
  top: -3px;
  right: -3px;
  bottom: -3px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 2px solid ${textDisabled};
  border-radius: 4px;
  background-color: white;
  z-index: 1000;
`;

export const ModalImg = styled.img`
  max-width: 47px;
  max-height: 47px;
`;

export const ModalTextBlock = styled.div`
  /* display: flex; */
`;

export const ModalTextFirst = styled.p`
  color: ${textPrimary};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.15px;
`;

export const ModalTextSecond = styled.p`
  color: ${textSecondary};

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.4px;
`;

export const ModalCancelButton = styled.button`
  ${buttonReset}
  position: absolute;
  top: 6px;
  right: 6px;
`;

export const ProgressBarContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
