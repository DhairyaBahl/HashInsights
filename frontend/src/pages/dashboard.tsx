import Header from '@/components/Header';
import HomePosts from '@/components/HomePosts';
import Loader from '@/components/Loader';
import { useGetMyPosts } from '@/hooks/useGetMyPosts';
import styles from '@/styles/Dashboard.module.css';
import isEmpty from '@/utils/isEmpty';
import Link from 'next/link';
import toast from 'react-hot-toast';

const Dashboard = () => {
    const { data: posts, isLoading, error } = useGetMyPosts();
  
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
            <h1>You have not created any posts yet.</h1>
          </div>
        );
      }

      if(error) {
        toast.error(error);
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
  
        <div className={styles.dashboard}>
          <div className={styles.posts}>
            <div className={styles.headings}>
              <h1 className={styles.heading}>My Posts:</h1>

              <Link href={'/create'} className={styles.createPost}>Create Post</Link>
            </div>

            { getPostsUI() }
          </div>
        </div>
  
      </div>
    );
};

export default Dashboard;