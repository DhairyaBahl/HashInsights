import styles from '@/styles/PostPage.module.css';
import Header from "@/components/Header";
import { postService } from "@/services";
import { Post } from "@/types/Post";
import ISTTime from "@/utils/ISTTime";
import contentFormatter from '@/utils/contentFormatter';

const PostPage = ({ post }: { post: Post }) => {
  const getFormattedContent = (content: string) => {
    return contentFormatter(content).map((paragraph, index) => (
      <p key={index} className={styles.content}>
        {paragraph}
      </p>
    ));
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
              <p>{ISTTime(post.createdAt).toString().slice(0,15)}</p>
            </div>
          </div>

          { getFormattedContent(post.content) }
        </div>

      </div>
    </>
  );
};

export async function getStaticProps({ params }: { params: { postId: string } }) {
  const postId = params.postId;
  const post = await postService.getPostById(postId);

  return { props: { post }, revalidate: 1 }
}

export async function getStaticPaths() {
  const posts = await postService.getAllPosts();
  const paths = posts.map(post => ({
    params: { postId: post.id.toString() }
  }));

  return { paths, fallback: 'blocking' };
}

export default PostPage;