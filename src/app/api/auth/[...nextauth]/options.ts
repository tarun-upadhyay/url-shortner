import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),

    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     username: {
    //       label: "Username",
    //       type: "text",
    //       placeholder: "enter your email",
    //     },
    //     password: {
    //       label: "Password",
    //       type: "password",
    //       placeholder: "Your awesome passwrd",
    //     },
    //   },
    //   async authorize(credentials) {
    //     /// Here you will retreive data from data base
    //     //https://next-auth.js.org/configuration/providers/credentials
    //     //read it
    //     const user = { id: 43, name: "date", pasword: "nextauth" };
    //     if (
    //       credentials?.username === user.name &&
    //       credentials?.password === user.pasword
    //     ) {
    //       return user;
    //     }
    //     return null;
    //   },
    // }),
  ],
 
 
};

//Random secret key creator
// Go to terminal and paste it $ openssl rand -base64 32
