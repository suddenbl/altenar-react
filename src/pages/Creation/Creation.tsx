import { FC } from 'react'
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
import { useFormStore } from '../../zustand/formDataStore'
import { CreationBlock } from '../../components/CreationBlock/CreationBlock'
import { GenericForm, InputConfig } from '../../components/GenericForm/GenericForm'
import { ToggleButton } from '../../components/ToggleButton/ToggleButton'
import batteryImg from '../../assets/images/battery.svg'
import wifiImg from '../../assets/images/wifi.svg'

export interface DisplayBackgroundTypes {
  background?: File | null | string
  color?: string
  dark?: string
}

export const Creation: FC = () => {
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

  const pushDataToServer = async (data: Object) => {
    console.log('Data to be sent to the server:', data)
    console.log('Data (stringify) to be sent to the server:', JSON.stringify(data))
    try {
      const response = await fetch('http://localhost:3001/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      console.log('Server response:', response)
    } catch (error) {
      console.error('Error sending data to the server:', error)
    }
  }

  const handleSubmitButton = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    const formData = new FormData()
    const reader = new FileReader()

    let backgroundFileToAdd: string | File
    if (backgroundFile instanceof File) {
      backgroundFileToAdd = URL.createObjectURL(backgroundFile)
    } else {
      backgroundFileToAdd = backgroundFile || ''
    }

    reader.onloadend = () => {
      if (reader.result && typeof reader.result === 'string') {
        formData.append('file', reader.result)
      }
    }

    const data = {
      descriptor,
      title,
      description,
      success,
      publishName,
      publishTime,
      backgroundFile: backgroundFileToAdd,
      color,
      linkTitleName,
      link,
      isDark,
      id: Math.floor(Math.random() * 1000),
    }
    pushDataToServer(data)
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
  const FileFormInputs: InputConfig[] = [
    {
      type: 'file',
      name: 'file',
      placeholder: 'Название',
      value: backgroundFile,
    },
  ]
  const ColorFormInputs: InputConfig[] = [
    {
      type: 'color',
      name: 'color',
      value: color,
    },
  ]
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
              <LastButton children="СОЗДАТЬ" type="submit" onClick={(e) => handleSubmitButton(e)} />
              <LastDescription>
                Подборка не будет опубликована. Вы сможете добавить продукты и внести правки
              </LastDescription>
            </SectionBlockLast>
          </SectionContainer>
        </Section>

        <Preview>
          <PreviewContainer>
            <PreviewContent color={color}>
              <ContentDisplay background={backgroundFile}>
                <DisplayTop>
                  <DisplayTopTime dark={isDark ? isDark.toString() : ''}>
                    {new Date().toLocaleTimeString('ru-RU').slice(0, -3)}
                  </DisplayTopTime>
                  <DisplayTopIndicators dark={isDark ? isDark.toString() : ''}>
                    <img src={wifiImg} alt="wifi" />
                    <img src={batteryImg} alt="battery" />
                  </DisplayTopIndicators>
                </DisplayTop>
                <DisplayBottom>
                  <DisplayBottomTitle dark={isDark ? isDark.toString() : ''}>
                    {title.length === 0 ? 'Onion' : title}
                  </DisplayBottomTitle>
                  <DisplayBottomDescription dark={isDark ? isDark.toString() : ''}>
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
