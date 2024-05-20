import { cookieService } from "@/services";

export const useLogout = () => {
    const logout = async () => {
        cookieService.delete('currentUser');
    };

    return logout;
}