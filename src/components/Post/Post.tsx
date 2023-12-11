import { PostItem, PublishItem, LinksItem, TextAdditional, TextMain, Tooltip } from './PostStyles'
import onionIMG from '../../assets/images/onion-small.jpg'
import tooltipSuccess from '../../assets/images/tooltip-success.svg'
import tooltipError from '../../assets/images/tooltip-error.svg'
import clipIMG from '../../assets/images/clip.svg'
import kebabButton from '../../assets/images/kebab-button.svg'

export const Post = (props: any) => {
  return (
    <>
      <PostItem>
        <img src={onionIMG} alt="Аватарка" />
        <div>
          <TextMain>{props.name}</TextMain>
          <TextAdditional>{props.additionalName}</TextAdditional>
        </div>
      </PostItem>
      <PublishItem>
        <Tooltip src={tooltipSuccess} alt="Success" />
        <div>
          <TextMain>{props.publishName}</TextMain>
          <TextAdditional>{props.publishTime}</TextAdditional>
        </div>
      </PublishItem>
      <LinksItem>
        <button>
          <img src={clipIMG} alt="clip" />
        </button>
        <button>
          <img src={kebabButton} alt="kebab" />
        </button>
      </LinksItem>
    </>
  )
}
