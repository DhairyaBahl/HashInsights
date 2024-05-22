import { AuthService } from "./auth.service";
import { Cookie } from "./cookie.service";
import { PostService } from "./post.service";

export const authService = new AuthService('http://localhost:5000/api');
export const postService = new PostService('http://localhost:5000/api');
export const cookieService = Cookie;