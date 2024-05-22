import Header from "@/components/Header";
import { useState } from "react";
import styles from "@/styles/Create.module.css";
import toast from "react-hot-toast";
import { useCreatePost } from "@/hooks/useCreatePost";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";

const Create = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const router = useRouter();
  const { createPost, loading, error, success } = useCreatePost();

  const handleCreate = async() => {
    await createPost(title, desc);
  };

  if(error) {
    toast.error(error);
  }

  if(success) {
    toast.success("Post created successfully");
    router.push('/');
  }

  return (
    <div>
      <Header />

      <div className={styles.container}>
        <h1 className={styles.heading}>Create a post</h1>

        <form className={styles.form}>
          <input 
            onChange={(e)=>setTitle(e.target.value)} 
            type="text" 
            placeholder='Enter post title' 
            className={styles.input}
          />

          <textarea 
            onChange={(e)=>setDesc(e.target.value)} 
            rows={15} 
            cols={30} 
            className={styles.input} 
            placeholder='Enter post description'
          />

          <button 
            onClick={handleCreate} 
            className={styles.createButton}
            disabled={loading}
          >
            Create
          </button>
        </form>

        </div>

    </div>
  );
};

export default Create;