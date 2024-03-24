import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: {  label: "Password", type: "password", placeholder: "Password"}
      },
      async authorize(credentials, req) {
        if (!credentials) return null;
        console.log(credentials);
        return null;
      }
    }),
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