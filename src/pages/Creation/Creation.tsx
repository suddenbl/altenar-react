import { useState } from 'react'
import { CreationHeader } from '../../components/CreationHeader/CreationHeader'
import {
  ColorInput,
  DownloadInput,
  DownloadLabel,
  DownloadTextFirst,
  DownloadTextSecond,
  DownloadTextThird,
  FormInput,
  FormInputDescription,
  FormSpan,
  FormTextArea,
  Section,
  SectionBlock,
  SectionBlockDescription,
  SectionBlockTitle,
  SectionDivider,
  SectionForm,
} from './CreationStyles'

export const Creation = () => {
  const [descriptor, setDescriptor] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  return (
    <>
      <CreationHeader />
      <main>
        <Section>
          <SectionBlock>
            <div>
              <SectionBlockTitle>Расскажите о подборке</SectionBlockTitle>
              <SectionBlockDescription>
                Желательно сделать это кратко и ёмко
              </SectionBlockDescription>
            </div>
            <SectionForm>
              <FormSpan>
                <FormInput
                  type="text"
                  placeholder="Дискриптор"
                  value={descriptor}
                  onChange={(e) => setDescriptor(e.target.value)}
                />
                <FormInputDescription>30</FormInputDescription>
              </FormSpan>
              <FormSpan>
                <FormInput
                  type="text"
                  placeholder="Название"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FormInputDescription>50</FormInputDescription>
              </FormSpan>
              <FormTextArea
                name="description"
                cols={30}
                rows={5}
                placeholder="Описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}></FormTextArea>
            </SectionForm>
            <SectionDivider></SectionDivider>
          </SectionBlock>
          <SectionBlock>
            <SectionBlockTitle>Загрузите обложку</SectionBlockTitle>
            <SectionForm>
              <DownloadLabel>
                <DownloadInput type="file" />
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
            </SectionForm>
            <SectionDivider></SectionDivider>
          </SectionBlock>
          <SectionBlock>
            <div>
              <SectionBlockTitle>Выберите цвет</SectionBlockTitle>
              <SectionBlockDescription>
                Лучше всего подойдет цвет преобладающий на обложке
              </SectionBlockDescription>
            </div>
            <ColorInput type="color" />
          </SectionBlock>
          <SectionBlock>
            <div>
              <SectionBlockTitle>Проверьте читабельность</SectionBlockTitle>
              <SectionBlockDescription>
                Выберите цвет интерфейса, который будет контрастнее смотреться на
                выбранном фоне
              </SectionBlockDescription>
            </div>
          </SectionBlock>
          <SectionBlock>
            <div>
              <SectionBlockTitle>Оставьте ссылку</SectionBlockTitle>
              <SectionBlockDescription>
                Лучше всего ссылаться на каталог вашего магазина или промо-страницу
              </SectionBlockDescription>
            </div>
          </SectionBlock>
        </Section>
      </main>
    </>
  )
}
