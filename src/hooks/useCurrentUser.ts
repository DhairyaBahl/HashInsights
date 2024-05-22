import { cookieService } from "@/services";
import { User } from "@/types/User";
import { useEffect, useState } from "react";

export const useCurrentUser = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const currentUser = cookieService.get('currentUser');

        if(currentUser) {
            setUser(JSON.parse(currentUser) as User);
        }
    }, []);

    // const refetchUser = async (userId: string) => {
    //     const userInfo = await authService.getMe(userId);
    //     const currentUser = Cookies.get("currentUser");
    
    //     if (userInfo && currentUser) {
    //       const newUser = {
    //         ...JSON.parse(currentUser),
    //         username: userInfo.username,
    //         avatar: userInfo.avatar,
    //       };
    //       Cookies.set("currentUser", JSON.stringify(newUser));
    //       setUser(newUser);
    //     }
    //   };

    return user;
}