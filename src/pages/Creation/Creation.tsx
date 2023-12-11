import { useState } from 'react'
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

import { CreationBlock } from '../../components/CreationBlock/CreationBlock'
import { GenericForm, InputConfig } from '../../components/GenericForm/GenericForm'
import { ToggleButton } from '../../components/ToggleButton/ToggleButton'

export const Creation = () => {
  // расскажите о подборке
  const [descriptor, setDescriptor] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const DescriptionFormInputs: InputConfig[] = [
    {
      type: 'text',
      name: 'descriptor',
      placeholder: 'Дискриптор',
      value: descriptor,
    },
    { type: 'text', name: 'name', placeholder: 'Название', value: name },
    {
      type: 'textarea',
      name: 'description',
      placeholder: 'Описание',
      value: description,
    },
  ]

  // загрузите обложку

  const [background, setBackground] = useState('')

  const BackgroundFormInputs: InputConfig[] = [
    {
      type: 'file',
      name: 'file',
      placeholder: 'Название',
      value: background,
    },
  ]

  // выберите цвет

  const [color, setColor] = useState('')

  const ColorFormInputs: InputConfig[] = [
    {
      type: 'color',
      name: 'color',
      value: color,
    },
  ]

  // проверьте читабельность

  // оставьте ссылку

  const [links, setLinks] = useState('')

  const LinksFormInputs: InputConfig[] = [
    {
      type: 'text',
      name: 'links',
      value: links,
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
              <GenericForm inputs={BackgroundFormInputs}></GenericForm>
              {/* <SectionForm>
                <DownloadLabel>
                  <DownloadInput type="file" />
                  <img src={downloadButton} alt="Download" />
                  <div>
                    <DownloadTextFirst>
                      Перетащите файл или
                      <DownloadTextSecond> загрузите с компьютера</DownloadTextSecond>
                    </DownloadTextFirst>
                    <DownloadTextThird>
                      Соотношение 1:1. Минимальный размер 1242х1242 px
                    </DownloadTextThird>
                  </div>
                </DownloadLabel>
              </SectionForm> */}
              <SectionDivider />
            </CreationBlock>
            <CreationBlock
              title="Выберите цвет"
              description="Лучше всего подойдет цвет преобладающий на обложке">
              {/* <ColorInput type="color" value="#9197A3" /> */}
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
              {/* <SectionForm>
                <FormSpan>
                  <FormInput
                    type="text"
                    placeholder="Название"
                    // value={descriptor}
                    // onChange={(e) => setDescriptor(e.target.value)}
                  />
                  <FormInputDescription>30</FormInputDescription>
                </FormSpan>
                <FormLabelSpan>
                  <img src={clipImg} alt="Clip" />
                  <FormInputWithSVG type="text" placeholder="Ссылка" id="links" />
                  <FormInputDescription>50</FormInputDescription>
                </FormLabelSpan>
              </SectionForm> */}
              <SectionDivider />
            </CreationBlock>
            <SectionBlockLast>
              <LastButton children="СОЗДАТЬ" />
              <LastDescription>
                Подборка не будет опубликована. Вы сможете добавить продукты и внести правки
              </LastDescription>
            </SectionBlockLast>
          </SectionContainer>
        </Section>
        <Preview>
          <PreviewContainer>
            <PreviewContent>
              <ContentDisplay>
                <DisplayTop>
                  <DisplayTopTime>22:47</DisplayTopTime>
                  <DisplayTopIndicators>
                    <img src="" alt="" />
                    <img src="" alt="" />
                  </DisplayTopIndicators>
                </DisplayTop>
                <DisplayBottom>
                  <DisplayBottomTitle>Onion</DisplayBottomTitle>
                  <DisplayBottomDescription>
                    The useful properties of onions are versatile. It is a powerful antimicrobial
                    that effectively fights internal and external infection. Onions have antiviral,
                    antibacterial, anthelmintic, antifungal, disinfectant properties. In case of
                    colds, it is not only consumed internally, but also left indoors in cut form to
                    disinfect the air.
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
