import { FC, useState } from 'react'
import kebabButton from '../../assets/images/kebab-button.svg'
import {
  DropdownButton,
  DropdownContent,
  DropdownContentItem,
  DropdownContentItemText,
} from './DropdownStyles'

export interface PublishProps {
  id: number
}

export const Dropdown: FC<PublishProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const handlePublish = (id: number) => {
    fetch(`http://localhost:3001/posts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ success: true }),
    })
  }

  const handleDelete = (id: number) => {
    fetch(`http://localhost:3001/posts/${id}`, {
      method: 'DELETE',
    })
  }

  return (
    <DropdownButton onClick={() => handleClick()}>
      <img src={kebabButton} alt="Dropdown" />
      {open && (
        <DropdownContent>
          <DropdownContentItem onClick={() => handlePublish(props.id)}>
            <DropdownContentItemText>Опубликовать</DropdownContentItemText>
          </DropdownContentItem>
          <DropdownContentItem onClick={() => handleDelete(props.id)}>
            <DropdownContentItemText>Удалить</DropdownContentItemText>
          </DropdownContentItem>
        </DropdownContent>
      )}
    </DropdownButton>
  )
}
