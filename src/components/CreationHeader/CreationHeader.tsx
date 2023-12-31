import { FC } from 'react'
import { WrapperTitle } from '../Header/HeaderStyles'
import {
  Container,
  CreationWrapperText,
  Header,
  LinkBack,
  WrapperCreation,
  WrapperLink,
} from './CreationHeaderStyles'
import ArrowIMG from '../../assets/images/arrow.svg'

export const CreationHeader: FC = () => {
  return (
    <Header>
      <Container>
        <LinkBack to="/">
          <img src={ArrowIMG} alt="arrow" />
          Вернуться к списку
        </LinkBack>
        <WrapperCreation>
          <WrapperTitle>Создайте подборку</WrapperTitle>
          <CreationWrapperText>
            Перед началом ознакомьтесь с <WrapperLink to="/">гайдлайнами</WrapperLink>, где вы
            найдете примеры правильного оформления
          </CreationWrapperText>
        </WrapperCreation>
      </Container>
    </Header>
  )
}
