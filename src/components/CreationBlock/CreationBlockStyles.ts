import styled from 'styled-components'
import { fontSizeNormal, textPrimary, textSecondary } from '../../styles'

export const BlockTitle = styled.h4`
  color: ${textPrimary};
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
`

export const BlockDescription = styled.p`
  color: ${textSecondary};
  margin-bottom: 23px;
  font-size: ${fontSizeNormal};
  line-height: 20px;
`
