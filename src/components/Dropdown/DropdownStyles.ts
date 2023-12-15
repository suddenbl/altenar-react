import styled from 'styled-components'
import { textPrimary } from '../../styles'
import { buttonReset } from '../../styles/mixins'

export const DropdownButton = styled.button`
  ${buttonReset}
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 24px;

  &:hover {
    background-color: rgba(33, 150, 243, 0.04);
    img {
      filter: invert(63%) sepia(49%) saturate(7289%) hue-rotate(186deg) brightness(102%)
        contrast(90%);
    }
  }
`

export const DropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: -20px;
  right: -140px;
  display: flex;
  width: 134px;
  padding: 17px 0;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px 0px rgba(0, 0, 0, 0.2);
`

export const DropdownContentItem = styled.div`
  ${buttonReset}
  display: flex;
  flex-direction: column;
  &:hover {
    background-color: #f5f5f5;
  }
`

export const DropdownContentItemText = styled.p`
  padding: 0 25px;
  color: ${textPrimary};
  font-size: 12px;
  text-align: left;
`
