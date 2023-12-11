import styled from 'styled-components'
import { buttonReset } from '../../styles/mixins'

export const itemMixin = `
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  /* font-size: $font-size-normal; */
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
`

export const PostItem = styled.div`
  ${itemMixin}
  img {
    border-radius: 4px;
  }
`

export const PublishItem = styled.div`
  ${itemMixin}
  gap: 10px;
`

export const Tooltip = styled.img`
  width: 9px;
  height: 9px;
  margin-bottom: 15px;
`

export const TextMain = styled.p`
  /* color: $text-primary; */
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`

export const TextAdditional = styled.p`
  /* color: $text-disabled; */
  color: rgba(0, 0, 0, 0.38);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.4px;
`

export const LinksItem = styled.div`
  ${itemMixin}
  justify-content: space-between;
  button {
    ${buttonReset}
    width: 24px;
    height: 24px;
    border-radius: 24px;
  }

  button:hover {
    background-color: rgba(33, 150, 243, 0.04);
    img {
      @include small-buttons-change-color;
    }
  }

  button:active {
    background-color: rgba(33, 150, 243, 0.24);
    img {
      @include small-buttons-change-color;
    }
  }
`
