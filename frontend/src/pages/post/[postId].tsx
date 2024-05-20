import { useGetPostById } from "@/hooks/useGetPostById";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import styles from '@/styles/PostPage.module.css';
import { useEffect, useState } from "react";
import isEmpty from "@/utils/isEmpty";
import Header from "@/components/Header";

const PostPage = () => {
  const router = useRouter();

  const [postId, setPostId] = useState<string>('');
  const { post, loading, error } = useGetPostById(postId);

  useEffect(() => {
    if(router.isReady) {
      setPostId(router.query.postId as string);
    }
  }, [router.isReady])

  if(loading || isEmpty(postId)) {
    return <h1>Loading...</h1>
  }

  if(error) {
    toast.error('An error occurred');
  }

  if(!post) {
    return <h1>Post not found</h1>
  }

  return (
    <>

      <Header />

      <div className={styles.container}>

        <div className={styles.innerContainerRight}>
          <h1 className={styles.title}>
            {post.title}
          </h1>

          <div className={styles.info}>
            <p>@{post.username}</p>

            <div className={styles.date}>
              <p>{new Date(post.createdAt).toString().slice(0,15)}</p>
            </div>
          </div>

          <p className={styles.content}>{post.content}</p>
        </div>

      </div>

    </>
  );
};

export default PostPage;