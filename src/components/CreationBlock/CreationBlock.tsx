import {
  BlockContainer,
  BlockDescription,
  BlockInput,
  BlockTitle,
} from './CreationBlockStyles'

export const CreationBlock = (props: any) => {
  return (
    <BlockContainer>
      <BlockTitle>{props.title}</BlockTitle>
      <BlockDescription>{props.description}</BlockDescription>
    </BlockContainer>
  )
}
