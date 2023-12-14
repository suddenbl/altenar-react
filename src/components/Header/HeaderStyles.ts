import styled from 'styled-components'
import { container } from '../../styles/mixins'
import { Link } from 'react-router-dom'
import { primaryDarkColor, primaryMainColor, textSecondary } from '../../styles'

export const StyledHeader = styled.header`
  margin-bottom: 24px;
  background-color: rgba(0, 0, 0, 0.04);
`

export const Container = styled.div`
  ${container}
  padding-top: 60px;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 45px;
`

export const WrapperTitle = styled.h1`
  margin-bottom: 14px;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`

export const WrapperText = styled.p`
  color: ${textSecondary};
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`

export const LinkButton = styled(Link)`
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
  text-decoration: none;

  &:hover {
    background-color: ${primaryDarkColor};
  }
`

export const SocialsWrapper = styled.div`
  display: flex;
`

export const SocialsButton = styled.button<{ $disabled?: boolean }>`
  width: 165px;
  padding-bottom: 10px;
  background-color: transparent;
  border: none;
  border-radius: 0;
  border-bottom: ${(props) => (props.$disabled ? 'none' : `1px solid ${primaryMainColor}`)};
  color: ${(props) => (props.$disabled ? 'rgba(0, 0, 0, 0.54)' : `${primaryMainColor}`)};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  cursor: pointer;
`
