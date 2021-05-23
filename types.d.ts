declare module 'express-session' {
    interface SessionData {
        user?: {
            email: string;
        };
        isDarkMode: boolean;
    }
}

declare module "*.svg" {
    const imageUrl: string;
    export default imageUrl;
}
