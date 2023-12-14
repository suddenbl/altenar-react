import { FC } from 'react'
import {
  PostItem,
  PublishItem,
  LinksItem,
  TextAdditional,
  TextMain,
  Tooltip,
  PostImage,
} from './PostStyles'
import tooltipSuccess from '../../assets/images/tooltip-success.svg'
import tooltipError from '../../assets/images/tooltip-error.svg'
import clipIMG from '../../assets/images/clip.svg'
import kebabButton from '../../assets/images/kebab-button.svg'
import { PostData as PostDataType } from '../../zustand/posts'

export const Post: FC<PostDataType> = (props) => {
  return (
    <>
      <PostItem>
        <PostImage src={props.backgroundFile} alt="Profile picture" />
        <div>
          <TextMain>{props.title}</TextMain>
          <TextAdditional>{props.descriptor}</TextAdditional>
        </div>
      </PostItem>
      <PublishItem>
        <Tooltip src={props.success ? tooltipSuccess : tooltipError} alt="Status" />
        <div>
          <TextMain>{props.publishName}</TextMain>
          <TextAdditional>{new Date(props.publishTime).toLocaleDateString()}</TextAdditional>
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
