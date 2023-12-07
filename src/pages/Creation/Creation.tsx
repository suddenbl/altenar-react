import { CreationHeader } from '../../components/CreationHeader/CreationHeader'
import {
  FormInput,
  FormInputDescription,
  FormSpan,
  FormTextArea,
  Section,
  SectionBlock,
  SectionBlockDescription,
  SectionBlockFolder,
  SectionBlockTitle,
  SectionForm,
} from './CreationStyles'

export const Creation = () => {
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
                <FormInput type="text" placeholder="Дискриптор" />
                <FormInputDescription>30</FormInputDescription>
              </FormSpan>
              <FormSpan>
                <FormInput type="text" placeholder="Название" />
                <FormInputDescription>50</FormInputDescription>
              </FormSpan>
              <FormTextArea
                name="description"
                cols={30}
                rows={5}
                placeholder="Описание"
                value=""></FormTextArea>
            </SectionForm>
          </SectionBlock>
        </Section>
      </main>
    </>
  )
}
