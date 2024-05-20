import { authService, cookieService } from "@/services";
import { User } from "@/types/User";

export const useLogin = () => {
    const login = async (email: string, password: string) => {
        const user = await authService.login(email, password);

        if(user) {
            cookieService.set('currentUser', JSON.stringify(user));
        }

        return user as User;
    }

    return login;
};