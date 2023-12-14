import styled from 'styled-components'
import { container } from '../../styles/mixins'
import { fontSizeNormal } from '../../styles'

export const Container = styled.div`
  ${container}
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 4fr 1.7fr 100px;
  grid-gap: 24px 0px;
`

export const PostTitle = styled.div`
  font-size: ${fontSizeNormal};
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
`
