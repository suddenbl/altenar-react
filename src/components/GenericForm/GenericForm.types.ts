interface GenericFormProps {
  inputs: InputConfig[];
}

type InputType = 'text' | 'textarea' | 'color' | 'file' | 'checkbox';

interface InputConfig {
  flag?: string;
  type: InputType;
  name: string;
  placeholder?: string;
  value: string;
  inputLength?: string;
}
