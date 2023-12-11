import { FC, useState } from 'react'
import {
  Form,
  FormContainer,
  FormInputDescription,
  StyledInput,
  StyledTextarea,
} from './GenericFormStyles'
import {
  ColorInput,
  DownloadInput,
  DownloadLabel,
  DownloadTextFirst,
  DownloadTextSecond,
  DownloadTextThird,
} from '../../pages/Creation/CreationStyles'

import downloadButton from '../../assets/images/download.svg'

export type InputType = 'text' | 'textarea' | 'color' | 'file'
export interface InputConfig {
  flag?: string
  type: InputType
  name: string
  placeholder?: string
  value: string
  inputLength?: string
}
export interface GenericFormProps {
  inputs: InputConfig[]
}

export const GenericForm: FC<GenericFormProps> = ({ inputs }) => {
  const [formData, setFormData] = useState<Record<string, string>>({})

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <Form>
      {inputs.map(({ flag, type, name, placeholder, value, inputLength }) => (
        <FormContainer key={name}>
          {type === 'textarea' && (
            <StyledTextarea
              name={name}
              placeholder={placeholder}
              value={formData[name] || value}
              onChange={(e) => handleChange(name, e.target.value)}
            />
          )}
          {type === 'text' && flag !== 'last' && (
            <>
              <StyledInput
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name] || value}
                onChange={(e) => handleChange(name, e.target.value)}
              />
              {type === 'text' && <FormInputDescription>30</FormInputDescription>}
            </>
          )}
          {type === 'text' && flag === 'last' && (
            <>
              <StyledInput
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name] || value}
                onChange={(e) => handleChange(name, e.target.value)}
              />
              {type === 'text' && <FormInputDescription>30</FormInputDescription>}
            </>
          )}
          {type === 'file' && (
            <>
              <DownloadLabel>
                <DownloadInput
                  type="file"
                  name={name}
                  value={formData[name] || value}
                  onChange={(e) => handleChange(name, e.target.value)}
                />
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
            </>
          )}
          {type === 'color' && (
            <ColorInput
              type={type}
              name={name}
              placeholder={placeholder}
              value={formData[name] || value || '#9197A3'}
              onChange={(e) => handleChange(name, e.target.value)}
            />
          )}
        </FormContainer>
      ))}
    </Form>
  )
}
