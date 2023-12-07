import {
  StyledHeader,
  Container,
  Wrapper,
  WrapperTitle,
  WrapperText,
  LinkButton,
  SocialsWrapper,
  SocialsButton,
} from '../../styles/HeaderStyles'

import buttonPlusImage from '../../assets/images/button-plus.svg'

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <Container>
          <Wrapper>
            <div>
              <WrapperTitle>Социальные сети</WrapperTitle>
              <WrapperText>Делитесь постами из соцсетей</WrapperText>
            </div>
            <LinkButton to="/creation" role="button">
              <img src={buttonPlusImage} alt="Plus" />
              ДОБАВИТЬ
            </LinkButton>
          </Wrapper>
          <SocialsWrapper>
            <SocialsButton>INSTAGRAM</SocialsButton>
            <SocialsButton $disabled>VKONTAKTE</SocialsButton>
          </SocialsWrapper>
        </Container>
      </StyledHeader>
    </>
  )
}
