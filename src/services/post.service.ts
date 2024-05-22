import { Post } from '@/types/Post';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { cookieService } from '.';

export class PostService {
    protected readonly instance: AxiosInstance;

    public constructor(url: string) {
        if(!url) {
            url = 'http://localhost:5000/api';
        }

        this.instance = axios.create({
            baseURL: `${url}/posts`,
        });
    }

    getAllPosts = async (): Promise<Post[]> => {
        const posts = await this.instance.get('/');
        return posts.data;
    }

    getPostById = async (id: string): Promise<Post | null> => {
        const post = await this.instance.get(`/${id}`);
        return post.data;
    }
    
    createPost = async (title: string, content: string): Promise<any> => {
        const post = await this.instance.post('/', { title, content }, { 
            headers: {
                authorization: `Bearer ${JSON.parse(cookieService.get('currentUser') as string).accessToken}`,
            },
        });
        return post.data;
    };

    getMyPosts = async (): Promise<Post[]> => {
        const authorId  = JSON.parse(cookieService.get('currentUser') as string).id;
        const posts = await this.instance.get(`/?author=${authorId}`);
        return posts.data;
    };
};