import { FC } from 'react';
import { Container, Input, Label, Switch, TextOne, TextTwo } from './ToggleButtonsStyles';
import { useFormStore } from '../../zustand/formDataStore';

export const ToggleButton: FC = () => {
  const { isDark, setSwitch } = useFormStore();

  const handleCheckboxChange = () => {
    setSwitch();
  };

  return (
    <Container>
      <TextOne $color={isDark ? isDark.toString() : ''}>Темный</TextOne>
      <Label>
        <Input type="checkbox" checked={isDark} onChange={() => handleCheckboxChange()} />
        <Switch />
      </Label>
      <TextTwo $color={isDark ? isDark.toString() : ''}>Светлый</TextTwo>
    </Container>
  );
};
