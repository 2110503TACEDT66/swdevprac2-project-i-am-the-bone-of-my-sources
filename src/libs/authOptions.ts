import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import userLogIn from "./userLogIn";

export const authOptions: AuthOptions = {
  pages: {
    signIn: '/auth/login',
  },
  providers: [
    Credentials({
      id: 'signin',
      name: 'signin',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: {  label: "Password", type: "password", placeholder: "Password"}
      },
      async authorize(credentials, req) {
        if (!credentials) return null;
        const response = await userLogIn(credentials.email, credentials.password);
        if (response) {
          return response;
        } else {
          return null;
        }
      }
    }),
    // CredentialsProvider({
    //   id: 'signup',
    //   name: 'signup',
    //   credentials: {
    //     email: { label: "Email", type: "text", placeholder: "Email" },
    //     password: {  label: "Password", type: "password", placeholder: "Password"}
    //   },
    //   async authorize(credentials, req) {
    //     console.log(credentials);
    //     if (!credentials) return null;
    //     return null;
    //   }
    // })
  ],

  session: {strategy: 'jwt'},
  callbacks: {
      async jwt({token, user}) {
        return { ...token, ...user };
      },
      async session({session, token, user}) {
        session.user = token as any;
        return session;
      }
    }
};
