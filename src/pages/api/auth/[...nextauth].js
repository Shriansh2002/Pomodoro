import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_PROVIDER_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_PROVIDER_CLIENT_SECRET,
        })
        // ...add more providers here
    ],
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
};

export default NextAuth(authOptions);