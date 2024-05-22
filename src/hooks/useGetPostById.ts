import { postService } from "@/services";
import { Post } from "@/types/Post";
import { useEffect, useState } from "react";

export const useGetPostById = (id: string) => {
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getPostById = async () => {
        if(!id) return;

        setLoading(true);

        try {
            const data = await postService.getPostById(id);
            setPost(data);
        }
        catch (error: any) {
            setError(error.response.data);
        }

        setLoading(false);
    }

    useEffect(() => {
        getPostById();
    }, [id]);

    return { post, loading, error };
};