import { CreationHeader } from '../../components/CreationHeader/CreationHeader'
import {
  ContentDisplay,
  DisplayBottom,
  DisplayBottomDescription,
  DisplayBottomTitle,
  DisplayTop,
  DisplayTopIndicators,
  DisplayTopTime,
  LastButton,
  LastDescription,
  Preview,
  PreviewContainer,
  PreviewContent,
  Section,
  SectionBlockLast,
  SectionContainer,
  SectionDivider,
} from './CreationStyles'
import { useNavigate } from 'react-router-dom'
import { useFormStore } from '../../zustand/store'

import { CreationBlock } from '../../components/CreationBlock/CreationBlock'
import { GenericForm, InputConfig } from '../../components/GenericForm/GenericForm'
import { ToggleButton } from '../../components/ToggleButton/ToggleButton'

import batteryImg from '../../assets/images/battery.svg'
import wifiImg from '../../assets/images/wifi.svg'
import posts from '../../assets/postsData/postsData'

export interface DisplayBackgroundTypes {
  background?: File | null | string
  color?: string
  readable?: boolean
}

export const Creation = () => {
  const navigate = useNavigate()

  const {
    descriptor,
    title,
    description,
    backgroundFile,
    color,
    isDark,
    linkTitleName,
    link,
    success,
    publishTime,
    publishName,
  } = useFormStore()

  const handleSubmitButton = () => {
    navigate('/')
  }

  const DescriptionFormInputs: InputConfig[] = [
    {
      type: 'text',
      name: 'descriptor',
      placeholder: 'Дискриптор',
      value: descriptor,
      inputLength: '30',
    },
    {
      type: 'text',
      name: 'title',
      placeholder: 'Название',
      value: title,
      inputLength: '30',
    },
    {
      type: 'textarea',
      name: 'description',
      placeholder: 'Описание',
      value: description,
      inputLength: '50',
    },
  ]

  // загрузите обложку
  const FileFormInputs: InputConfig[] = [
    {
      type: 'file',
      name: 'file',
      placeholder: 'Название',
      value: backgroundFile,
    },
  ]

  // выберите цвет
  const ColorFormInputs: InputConfig[] = [
    {
      type: 'color',
      name: 'color',
      value: color,
    },
  ]

  // оставьте ссылку
  const LinksFormInputs: InputConfig[] = [
    {
      flag: 'last',
      type: 'text',
      placeholder: 'Название',
      name: 'linkTitleName',
      value: linkTitleName,
      inputLength: '30',
    },
    {
      flag: 'last',
      type: 'text',
      placeholder: 'Ссылка',
      name: 'link',
      value: link,
      inputLength: '50',
    },
  ]

  console.log(backgroundFile)

  return (
    <>
      <CreationHeader />
      <main>
        <Section>
          <SectionContainer>
            <CreationBlock
              title="Расскажите о подборке"
              description="Желательно сделать это кратко и ёмко">
              <GenericForm inputs={DescriptionFormInputs} />
              <SectionDivider />
            </CreationBlock>
            <CreationBlock title="Загрузите обложку">
              <GenericForm inputs={FileFormInputs}></GenericForm>
              <SectionDivider />
            </CreationBlock>
            <CreationBlock
              title="Выберите цвет"
              description="Лучше всего подойдет цвет преобладающий на обложке">
              <GenericForm inputs={ColorFormInputs}></GenericForm>
              <SectionDivider />
            </CreationBlock>
            <CreationBlock
              title="Проверьте читабельность"
              description="Выберите цвет интерфейса, который будет контрастнее смотреться на
              выбранном фоне">
              <ToggleButton></ToggleButton>
              <SectionDivider />
            </CreationBlock>
            <CreationBlock
              title="Оставьте ссылку"
              description="Лучше всего ссылаться на каталог вашего магазина или промо-страницу">
              <GenericForm inputs={LinksFormInputs}></GenericForm>
            </CreationBlock>
            <SectionBlockLast>
              <LastButton
                children="СОЗДАТЬ"
                type="submit"
                onClick={() => handleSubmitButton()}
              />
              <LastDescription>
                Подборка не будет опубликована. Вы сможете добавить продукты и внести
                правки
              </LastDescription>
            </SectionBlockLast>
          </SectionContainer>
        </Section>

        <Preview>
          <PreviewContainer>
            <PreviewContent color={color}>
              <ContentDisplay background={backgroundFile}>
                <DisplayTop>
                  <DisplayTopTime readable={isDark}>22:47</DisplayTopTime>
                  <DisplayTopIndicators readable={isDark}>
                    <img src={wifiImg} alt="wifi" />
                    <img src={batteryImg} alt="battery" />
                  </DisplayTopIndicators>
                </DisplayTop>
                <DisplayBottom>
                  <DisplayBottomTitle readable={isDark}>
                    {title.length === 0 ? 'Onion' : title}
                  </DisplayBottomTitle>
                  <DisplayBottomDescription readable={isDark}>
                    {description.length === 0
                      ? 'The useful properties of onions are versatile. It is a powerful antimicrobial that effectively fights internal and external infection. Onions have antiviral,antibacterial, anthelmintic, antifungal, disinfectant properties. In case ofcolds, it is not only consumed internally, but also left indoors in cut form todisinfect the air.'
                      : description}
                  </DisplayBottomDescription>
                </DisplayBottom>
              </ContentDisplay>
            </PreviewContent>
          </PreviewContainer>
        </Preview>
      </main>
    </>
  )
}
