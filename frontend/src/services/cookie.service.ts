export class Cookie {
    public constructor() {
        throw new Error('This class should not be instantiated');
    }

    public static set(name: string, value: string, days?: number): void {
        const expires = new Date();

        if (days) {
            expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        } else {
            expires.setTime(expires.getTime() + 365 * 24 * 60 * 60 * 1000);
        }

        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;`;
    }

    public static get(name: string): string | null {
        const cookieName = `${name}=`;
        const cookies = document.cookie.split(';');

        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(cookieName) === 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }

        return null;
    }

    public static delete(name: string): void {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
};