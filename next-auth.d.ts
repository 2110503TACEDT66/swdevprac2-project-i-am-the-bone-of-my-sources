import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      // not implemented yet
      // _id: string;
      // name: string;
      // email: string;
      // image: string;
      // role: string;
      token: string;
    };
  }
}