import { postService } from "@/services";
import { Post } from "@/types/Post";
import { useEffect, useState } from "react";

export const useGetMyPosts = () => {
    const [data, setData] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);

    const getMyPosts = async () => {
        setIsLoading(true);

        try {
            const data = await postService.getMyPosts();
            setData(data);
        }
        catch (error: any) {
            setError(error.response.data);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        getMyPosts();
    }, []);

    return { data, isLoading, error };
};