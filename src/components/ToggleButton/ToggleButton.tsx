import { ChangeEvent, useState } from 'react'
import {
  Container,
  Input,
  Label,
  Switch,
  TextOne,
  TextTwo,
} from './ToggleButtonsStyles'

export const ToggleButton = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
  }

  return (
    <Container>
      <TextOne>Темный</TextOne>
      <Label>
        <Input type="checkbox" checked={checked} onChange={handleChange} />
        <Switch />
      </Label>
      <TextTwo>Светлый</TextTwo>
    </Container>
  )
}
