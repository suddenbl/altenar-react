import { FC } from 'react'
import { create } from 'zustand'
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

import { useFormStore } from '../../zustand/store'

import downloadButton from '../../assets/images/download.svg'
import { ToggleButton } from '../ToggleButton/ToggleButton'

type InputType = 'text' | 'textarea' | 'color' | 'file' | 'checkbox'
export interface InputConfig {
  flag?: string
  type: InputType
  name: string
  placeholder?: string
  value: string
  inputLength?: string
}
interface GenericFormProps {
  inputs: InputConfig[]
}

export const GenericForm: FC<GenericFormProps> = ({ inputs }) => {
  const { formData, setFormData, setFile, setSwitch } = useFormStore()
  console.log(formData)

  return (
    <Form>
      {inputs.map(({ flag, type, name, placeholder, value, inputLength }) => (
        <FormContainer key={name}>
          {type === 'textarea' && (
            <StyledTextarea
              name={name}
              placeholder={placeholder}
              value={(formData[name] !== undefined ? String(formData[name]) : '') || value}
              onChange={(e) => setFormData(name, e.target.value)}
            />
          )}
          {type === 'text' && flag !== 'last' && (
            <>
              <StyledInput
                type={type}
                name={name}
                placeholder={placeholder}
                value={(formData[name] !== undefined ? String(formData[name]) : '') || value}
                onChange={(e) => setFormData(name, e.target.value)}
              />
              {type === 'text' && <FormInputDescription>{inputLength}</FormInputDescription>}
            </>
          )}
          {type === 'text' && flag === 'last' && (
            <>
              <StyledInput
                type={type}
                name={name}
                placeholder={placeholder}
                value={(formData[name] !== undefined ? String(formData[name]) : '') || value}
                onChange={(e) => setFormData(name, e.target.value)}
              />
              {type === 'text' && <FormInputDescription>{inputLength}</FormInputDescription>}
            </>
          )}
          {type === 'file' && (
            <>
              <DownloadLabel>
                <DownloadInput
                  type="file"
                  name={name}
                  onChange={(e) => {
                    const file = e.target.files && e.target.files[0]
                    if (file) {
                      setFile(name, file)
                    }
                  }}
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
              value={
                (formData[name] !== undefined ? String(formData[name]) : '') || value || '#9197A3'
              }
              onChange={(e) => setFormData(name, e.target.value)}
            />
          )}
          {/* {type === 'checkbox' && (
              <ToggleButton
                name={name}
                value={{ isDark: formData[name] }}
                onClick={() => setSwitch(name)}></ToggleButton>
            )} */}
        </FormContainer>
      ))}
    </Form>
  )
}
