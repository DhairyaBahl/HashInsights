import { postService } from "@/services";
import { Post } from "@/types/Post";
import { useEffect, useState } from "react";

export const useGetAllPosts = () => {
    const [data, setData] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);

    const getAllPosts = async () => {
        setIsLoading(true);

        try {
            const data = await postService.getAllPosts();
            setData(data);
        }
        catch (error: any) {
            setError(error.response.data);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        getAllPosts();
    }, []);

    return { data, isLoading, error };
};