import { FC } from 'react';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Container, PostTitle } from './PostsStyles';
import { Post } from '../../components/Post/Post';
import { PostData as PostDataType, usePostsStore } from '../../zustand/postsStore';

export const Posts: FC = () => {
  const { setPosts, posts } = usePostsStore();
  const [loading, setLoading] = useState(true);

  const getPosts = async () => {
    try {
      const response = await fetch('http://localhost:3001/posts');
      const data = await response.json();

      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Header />
      <section>
        <Container>
          <PostTitle>Пост</PostTitle>
          <PostTitle>Опубликовано</PostTitle>
          <PostTitle>Ссылка</PostTitle>
          {loading ? (
            <p>Идет загрузка постов...</p>
          ) : (
            posts.map((post: PostDataType) => <Post key={post.title} {...post} />)
          )}
        </Container>
      </section>
    </>
  );
};
