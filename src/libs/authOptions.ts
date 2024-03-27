import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import userLogIn from "./userLogIn";
import userRegister from "./userRegister";
import updateUser from "./updateUser";

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
    Credentials({
      id: 'signup',
      name: 'signup',
      credentials: {
        email: { label: "Email", type: "text" },
        password: {  label: "Password", type: "password"},
        name: { label: "Name", type: "text" },
        tel: { label: "Tel", type: "text" }
      },
      async authorize(credentials, req) {
        if (!credentials) return null;
        const response = await userRegister(credentials.email, credentials.password, credentials.name, credentials.tel);
        if (response) {
          return response;
        } else {
          return null;
        }
      }
    }),
    Credentials({
      id: 'updateUser',
      name: 'updateUser',
      credentials: {
        email: { label: "Email", type: "text" },
        password: {  label: "Password", type: "password"},
        name: { label: "Name", type: "text" },
        tel: { label: "Tel", type: "text" },
        picture: { label: "Profile Image (URL)", type: "text" },
        token: { label: "Token", type: "text" }
      },
      async authorize(credentials, req) {
        if (!credentials) return null;
        const response = await updateUser(credentials.token, credentials);
        if (response) {
          return response;
        } else {
          return null;
        }
      }
    })
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
