import styles from '../styles/Home.module.css';

import Header from "@/components/Header";
import HomePosts from "@/components/HomePosts";
import { postService } from '@/services';
import { Post } from '@/types/Post';
import isEmpty from '@/utils/isEmpty';

const HomePage = ({ posts }: { posts: Post[] }) => {
  const getPostsUI = () => {
    if(isEmpty(posts)) {
      return (
        <div className={styles.noPosts}>
          <h1>No posts available</h1>
        </div>
      );
    }

    return posts.map((post: Post, index: number) => (
      <HomePosts key={post.id} post={post} />
    ));
  };

  return (
    <div>
      <Header />

      <div className={styles.posts}>
        { getPostsUI() }
      </div>

    </div>
  );
};

export async function getServerSideProps() {
  try {
    const posts: Post[] = await postService.getAllPosts();
    return { props: { posts } };
  } catch (error) {
    return { props: { posts: [] } };
  }
}

export default HomePage;
