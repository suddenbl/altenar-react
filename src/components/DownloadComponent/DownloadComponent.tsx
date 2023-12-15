import { FC } from 'react'
import {
  DownloadLabel,
  DownloadInput,
  DownloadTextFirst,
  DownloadTextSecond,
  DownloadTextThird,
} from './DownloadComponentStyles'
import { useFormStore } from '../../zustand/formDataStore'
import downloadButton from '../../assets/images/download.svg'

interface DownloadComponentProps {
  name: string
}

export const DownloadComponent: FC<DownloadComponentProps> = ({ name }) => {
  const values = useFormStore()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      values.setBackgroundFile(file)
    }
  }

  //   const sendFile = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     e.preventDefault()

  //     const xhr = new XMLHttpRequest()
  //     const formData = new FormData()
  //     const reader = new FileReader()

  //     reader.onloadend = () => {
  //       if (reader.result && typeof reader.result === 'string') {
  //         formData.append('file', reader.result)
  //       }

  //       xhr.open('POST', 'http://localhost:3001/uploads', true)

  //       xhr.onreadystatechange = () => {
  //         if (xhr.readyState === 4) {
  //           if (xhr.status === 200) {
  //             console.log('File uploaded successfully')
  //           } else {
  //             console.error('Error uploading file:', xhr.statusText)
  //           }
  //         }
  //       }

  //       xhr.send(formData)
  //     }
  //   }

  return (
    <>
      <DownloadLabel>
        <DownloadInput
          type="file"
          accept="image/*"
          name={name}
          onChange={(e) => handleFileChange(e)}
        />
        <img src={downloadButton} alt="Download" />
        <div>
          <DownloadTextFirst>
            Перетащите файл или
            <DownloadTextSecond> загрузите с компьютера</DownloadTextSecond>
          </DownloadTextFirst>
          <DownloadTextThird>Соотношение 1:1. Минимальный размер 1242х1242 px</DownloadTextThird>
        </div>
      </DownloadLabel>
    </>
  )
}
