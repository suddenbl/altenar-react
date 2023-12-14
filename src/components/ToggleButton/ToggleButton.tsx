import { FC } from 'react'
import { Container, Input, Label, Switch, TextOne, TextTwo } from './ToggleButtonsStyles'
import { useFormStore } from '../../zustand/store'

export const ToggleButton: FC = () => {
  const { isDark, setSwitch } = useFormStore()

  const handleCheckboxChange = () => {
    setSwitch()
  }

  return (
    <Container>
      <TextOne>Темный</TextOne>
      <Label>
        <Input type="checkbox" checked={isDark} onChange={() => handleCheckboxChange()} />
        <Switch />
      </Label>
      <TextTwo>Светлый</TextTwo>
    </Container>
  )
}
