import { BlockDescription, BlockTitle } from './CreationBlockStyles'

export const CreationBlock = ({ title, description, children }: any) => {
  return (
    <div>
      <div>
        <BlockTitle>{title}</BlockTitle>
        <BlockDescription>{description}</BlockDescription>
      </div>
      {children}
    </div>
  )
}
