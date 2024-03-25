import userLogIn from '@/libs/userLogIn';
import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
  pages: {
    signIn: '/auth/login',
  },
  providers: [
    CredentialsProvider({
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

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};