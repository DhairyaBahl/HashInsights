import { postService } from "@/services";
import { Post } from "@/types/Post";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

export const useCreatePost = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const createPost = async (title: string, content: string) => {
        setLoading(true);

        try {
            await postService.createPost(title, content);
            setSuccess(true);
        }
        catch (error: any) {
            setError(error.response.data);
        }

        setLoading(false);
    }

    return { createPost, loading, error, success };
}