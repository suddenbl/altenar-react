import styled from 'styled-components';
import { buttonReset } from '../../styles/mixins';
import { fontSizeNormal, textDisabled, textPrimary } from '../../styles';

export const itemMixin = `
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  font-size: ${fontSizeNormal};
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
`;

export const PostItem = styled.div`
  ${itemMixin}
  img {
    border-radius: 4px;
  }
`;

export const PostImage = styled.img`
  max-width: 75px;
  max-height: 75px;
`;

export const PublishItem = styled.div`
  ${itemMixin}
  gap: 10px;
`;

export const Tooltip = styled.img`
  width: 9px;
  height: 9px;
  margin-bottom: 15px;
`;

export const TextMain = styled.p`
  color: ${textPrimary};
  font-size: ${fontSizeNormal};
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const TextAdditional = styled.p`
  color: ${textDisabled};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.4px;
`;

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
      filter: invert(63%) sepia(49%) saturate(7289%) hue-rotate(186deg) brightness(102%)
        contrast(90%);
    }
  }

  button:active {
    background-color: rgba(33, 150, 243, 0.24);
    img {
      filter: invert(63%) sepia(49%) saturate(7289%) hue-rotate(186deg) brightness(102%)
        contrast(90%);
    }
  }
`;
