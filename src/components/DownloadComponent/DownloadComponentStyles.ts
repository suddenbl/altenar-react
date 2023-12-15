import styled from 'styled-components'
import { textDisabled, primaryMainColor, textSecondary } from '../../styles'

export const DownloadLabel = styled.label`
  position: relative;
  border: 2px dashed ${textDisabled};
  padding: 35px 37px 30px;
  display: flex;
  gap: 16px;
  transition: border 0.3s ease-in-out;

  &:active {
    border: 2px dashed ${primaryMainColor};
  }
`

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
`

export const DownloadTextFirst = styled.p`
  font-size: 14px;
  line-height: 20px;
`

export const DownloadTextSecond = styled.span`
  color: ${primaryMainColor};
`

export const DownloadTextThird = styled.p`
  font-size: 12px;
  color: ${textSecondary};
`
