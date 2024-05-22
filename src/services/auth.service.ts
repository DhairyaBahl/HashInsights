import { User } from '@/types/User';
import axios, { AxiosInstance } from 'axios';

export class AuthService {
    protected readonly instance: AxiosInstance;

    public constructor(url: string) {
        if(!url) {
            url = 'http://localhost:5000/api';
        }

        this.instance = axios.create({
            baseURL: `${url}/auth`,
            withCredentials: true,
        });
    }

    login = async (email: string, password: string): Promise<User> => {
        const user = await this.instance.post('/login', { email, password });
        return user.data;
    }

    register = async (username: string, email: string, password: string): Promise<{ message: string }> => {
        const response = await this.instance.post('/signup', { username, email, password });
        return response.data;
    }
};