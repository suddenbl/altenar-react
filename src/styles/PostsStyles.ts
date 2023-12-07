import styled from 'styled-components'
import { container } from './mixins'

export const Container = styled.div`
  ${container}
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 4fr 1.7fr 100px;
  grid-gap: 24px 0px;
`

export const PostTitle = styled.div`
  /* font-size: $font-size-normal; */
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
`
