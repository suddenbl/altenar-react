import { WrapperText, WrapperTitle } from '../../styles/HeaderStyles'
import {
  Container,
  Header,
  LinkBack,
  WrapperCreation,
  WrapperLink,
} from './CreationHeaderStyles'

import ArrowIMG from '../../assets/images/arrow.svg'

export const CreationHeader = () => {
  return (
    <Header>
      <Container>
        <LinkBack to="/">
          <img src={ArrowIMG} alt="arrow" />
          Вернуться к списку
        </LinkBack>
        <WrapperCreation>
          <WrapperTitle>Создайте подборку</WrapperTitle>
          <WrapperText>
            Перед началом ознакомьтесь с{' '}
            <WrapperLink to="/">гайдлайнами</WrapperLink>, где вы найдете примеры
            правильного оформления
          </WrapperText>
        </WrapperCreation>
      </Container>
    </Header>
  )
}
