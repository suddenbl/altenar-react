import { useState } from 'react'
import { Header } from '../../components/Header/Header'
import { Container, PostTitle } from '../../styles/PostsStyles'
import postsData from '../../assets/postsData/postsData'
import { Post } from '../../components/Post/Post'

export const Posts = () => {
  const [posts, setPosts] = useState(postsData)

  return (
    <>
      <Header />
      <section>
        <Container>
          <PostTitle>Пост</PostTitle>
          <PostTitle>Опубликовано</PostTitle>
          <PostTitle>Ссылка</PostTitle>
          {postsData.map((post) => (
            <Post key={post.name} {...post} />
          ))}
        </Container>
      </section>
    </>
  )
}