import { FC, useState } from 'react'
import { Form, FormInputDescription, StyledInput, StyledTextarea } from './GenericFormStyles'

export type InputType = 'text' | 'textarea' | 'color' | 'file'

export interface InputConfig {
  type: InputType
  name: string
  placeholder?: string
  value: string
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
      {inputs.map(({ type, name, placeholder, value }) => (
        <div key={name}>
          {type === 'textarea' ? (
            <StyledTextarea
              name={name}
              placeholder={placeholder}
              value={formData[name] || value}
              onChange={(e) => handleChange(name, e.target.value)}
            />
          ) : (
            <StyledInput
              type={type}
              name={name}
              placeholder={placeholder}
              value={formData[name] || value}
              onChange={(e) => handleChange(name, e.target.value)}
            />
          )}
          <FormInputDescription>30</FormInputDescription>
        </div>
      ))}
    </Form>
  )
}
