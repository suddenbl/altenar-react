import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { container } from '../../styles/mixins'
import { StyledHeader, Wrapper, WrapperText } from '../Header/HeaderStyles'

export const Container = styled.div`
  ${container}
  /* display: flex;
  flex-direction: column; */
  padding-top: 24px;
  padding-bottom: 24px;
`

export const Header = styled(StyledHeader)`
  margin-bottom: 32px;
`

export const LinkBack = styled(Link)`
  display: flex;
  gap: 5px;
  margin-bottom: 96px;
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.15px;
  text-decoration: none;
`

export const WrapperCreation = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;

  p {
    max-width: 26%;
    font-size: 14px;
  }
`

export const CreationWrapperText = styled(WrapperText)``

export const WrapperLink = styled(Link)`
  color: #2196f3;
`
