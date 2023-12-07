import styled from 'styled-components'

export const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.5px;
`

export const BlockTitle = styled.h3`
  color: #000000;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
`

export const BlockDescription = styled.p`
  /* color: $text-secondary; */
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 23px;
  /* font-size: $font-size-normal; */
  font-size: 14px;
  line-height: 20px;
`
export const BlockInput = styled.input`
  padding: 10px 5px;
  background-color: transparent;
`
