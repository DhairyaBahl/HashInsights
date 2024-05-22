import { authService } from "@/services";

export const useRegister = () => {
    const register = async (username: string, email: string, password: string) => {
        const response = await authService.register(username, email, password);
        return response.message;
    }

    return register;
};