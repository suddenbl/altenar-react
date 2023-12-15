import { FC } from 'react'
import {
  Form,
  FormContainer,
  FormInputDescription,
  StyledImg,
  StyledInput,
  StyledInputWithSvg,
  StyledTextarea,
} from './GenericFormStyles'
import { ColorInput } from '../../pages/Creation/CreationStyles'
import { useFormStore } from '../../zustand/formDataStore'
import clip from '../../assets/images/clip.svg'
import { DownloadComponent } from '../DownloadComponent/DownloadComponent'

type InputType = 'text' | 'textarea' | 'color' | 'file' | 'checkbox'
export interface InputConfig {
  flag?: string
  type: InputType
  name: string
  placeholder?: string
  value: string | File
  inputLength?: string
}
interface GenericFormProps {
  inputs: InputConfig[]
}

export const GenericForm: FC<GenericFormProps> = ({ inputs }) => {
  const values = useFormStore()

  return (
    <Form>
      {inputs.map(({ type, name, placeholder, inputLength }) => (
        <FormContainer key={name}>
          {name === 'descriptor' && (
            <>
              <StyledInput
                type={type}
                name={name}
                placeholder={placeholder}
                value={values.descriptor}
                onChange={(e) => values.setDescriptor(e.target.value)}
              />
              <FormInputDescription>{inputLength}</FormInputDescription>
            </>
          )}
          {name === 'title' && (
            <>
              <StyledInput
                type={type}
                name={name}
                placeholder={placeholder}
                value={values.title}
                onChange={(e) => values.setTitle(e.target.value)}
              />
              <FormInputDescription>{inputLength}</FormInputDescription>
            </>
          )}
          {name === 'description' && (
            <>
              <StyledTextarea
                name={name}
                placeholder={placeholder}
                value={values.description}
                onChange={(e) => values.setDescription(e.target.value)}
              />
              <FormInputDescription>{inputLength}</FormInputDescription>
            </>
          )}
          {name === 'file' && <DownloadComponent name={name} />}
          {name === 'color' && (
            <>
              <ColorInput
                type={type}
                name={name}
                value={values.color.length === 0 ? '#9197A3' : values.color}
                onChange={(e) => values.setColor(e.target.value)}
              />
            </>
          )}
          {name === 'linkTitleName' && (
            <>
              <StyledInput
                type={type}
                name={name}
                placeholder={placeholder}
                value={values.linkTitleName}
                onChange={(e) => values.setLinkTitleName(e.target.value)}
              />

              <FormInputDescription>{inputLength}</FormInputDescription>
            </>
          )}
          {name === 'link' && (
            <>
              <StyledInputWithSvg
                type={type}
                name={name}
                placeholder={placeholder}
                value={values.link.length === 0 ? '' : values.link}
                onChange={(e) => values.setLink(e.target.value)}
              />
              <StyledImg src={clip} alt="Clip" />
              <FormInputDescription>{inputLength}</FormInputDescription>
            </>
          )}
        </FormContainer>
      ))}
    </Form>
  )
}
