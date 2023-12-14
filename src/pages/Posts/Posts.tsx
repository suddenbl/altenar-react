import { FC } from 'react'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header/Header'
import { Container, PostTitle } from './PostsStyles'
import { Post } from '../../components/Post/Post'
import { PostData as PostDataType, usePostsStore } from '../../zustand/posts'

export const Posts: FC = () => {
  const { setPosts, posts } = usePostsStore()
  const [loading, setLoading] = useState(true)

  const getPosts = async () => {
    try {
      const response = await fetch('http://localhost:3001/posts')
      console.log('response', response)

      const data = await response.json()
      console.log('data', data)

      setPosts(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <Header />
      <section>
        <Container>
          <PostTitle>Пост</PostTitle>
          <PostTitle>Опубликовано</PostTitle>
          <PostTitle>Ссылка</PostTitle>
          {loading ? (
            <p>Loading...</p>
          ) : (
            posts.map((post: PostDataType) => <Post key={post.title} {...post} />)
          )}
        </Container>
      </section>
    </>
  )
}
