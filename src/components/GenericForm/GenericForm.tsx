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

import { useFormStore } from '../../zustand/store'

import downloadButton from '../../assets/images/download.svg'

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

// interface imageInfo {
//   width: number
//   height: number
// }

// const handleErrorFile = (event: React.ChangeEvent<HTMLInputElement>) => {
//   const selectedFile = event.target.files[0]
//   const reader = new FileReader();

//   reader.onload = function(e: ProgressEvent<FileReader>) (
//     const img = new Image()

//     img.onload = () => {
//       const imageSize: imageInfo = {
//         width: img.width,
//         height: img.height
//       }
//     }
//   )

// }

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
          {name === 'file' && (
            <>
              <DownloadLabel>
                <DownloadInput
                  type="file"
                  accept="image/*"
                  name={name}
                  onChange={(event) => {
                    const file = event.target.files?.[0]
                    if (file) {
                      values.setBackgroundFile(file)
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
              <StyledInput
                type={type}
                name={name}
                placeholder={placeholder}
                value={values.link.length === 0 ? '' : values.link}
                onChange={(e) => values.setLink(e.target.value)}
              />
              <FormInputDescription>{inputLength}</FormInputDescription>
            </>
          )}
        </FormContainer>
      ))}
    </Form>
  )
}
