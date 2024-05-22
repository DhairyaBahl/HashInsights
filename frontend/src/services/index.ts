import { AuthService } from "./auth.service";
import { Cookie } from "./cookie.service";
import { PostService } from "./post.service";

export const authService = new AuthService('https://hashinsights.azurewebsites.net/api');
export const postService = new PostService('https://hashinsights.azurewebsites.net/api');
export const cookieService = Cookie;