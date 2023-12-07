import { CreationBlock } from '../../components/CreationBlock/CreationBlock'
import { CreationHeader } from '../../components/CreationHeader/CreationHeader'
import { CreationInput, Section } from './CreationStyles'

export const Creation = () => {
  return (
    <>
      <CreationHeader />
      <main>
        <Section>
          <CreationBlock
            title={'Расскажите о подборке'}
            description={'Желательно сделать это кратко и ёмко'}></CreationBlock>
          <CreationBlock
            title={'Загрузите обложку'}
            description={null}></CreationBlock>
          <CreationBlock
            title={'Выберите цвет'}
            description={
              'Лучше всего подойдет цвет преобладающий на обложке'
            }></CreationBlock>
        </Section>
      </main>
    </>
  )
}
