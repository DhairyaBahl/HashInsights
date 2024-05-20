import Image from 'next/image';
import styles from '../styles/HomePosts.module.css';
import { Post } from '@/types/Post';
import { useRouter } from 'next/router';

const HomePosts = (props: Props) => {
  const { post } = props;

  const router = useRouter();

  return (
    <div className={styles.container}>

      <div className={styles.innerContainerRight}>
        <h1 
          className={styles.title}
          onClick={() => router.push(`/post/${post.id}`)}
        >
          {post.title}
        </h1>

        <div className={styles.info}>
          <p>@{post.username}</p>

          <div className={styles.date}>
            <p>{new Date(post.createdAt).toString().slice(0,15)}</p>
          </div>
        </div>

        <p className={styles.content}>{post.content.slice(0,200)+" ...Read more"}</p>
      </div>

    </div>
  );
};

type Props = {
  post: Post;
}

export default HomePosts;