import { cookieService } from "@/services";

export const useLogout = () => {
    const logout = () => {
        cookieService.delete('currentUser');
    };

    return logout;
}