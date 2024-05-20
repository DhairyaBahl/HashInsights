import styles from '../styles/Home.module.css';

import Header from "@/components/Header";
import HomePosts from "@/components/HomePosts";
import Loader from '@/components/Loader';
import { useGetAllPosts } from '@/hooks/useGetAllPosts';
import isEmpty from '@/utils/isEmpty';
import toast from 'react-hot-toast';

const HomePage = () => {
  const { data: posts, isLoading, error } = useGetAllPosts();

  const getPostsUI = () => {
    if(isLoading) {
      return (
        <div className={styles.loader}>
          <Loader />
        </div>
      );
    }

    if(isEmpty(posts)) {
      return (
        <div className={styles.noPosts}>
          <h1>No posts available</h1>
        </div>
      );
    }

    if(error) {
      toast.error(error);
      return;
    }

    return (
      <>
        {
          posts.map((post, index) => (
            <HomePosts key={index} post={post} />
          ))
        }
      </>
    )
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

export default HomePage;
