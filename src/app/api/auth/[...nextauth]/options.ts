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

 pages:{
    signIn:"/login"
 }
 
};

import { getToken } from "next-auth/jwt"

const secret = process.env.NEXTAUTH_SECRET

export default async function handler(req:any, res:any) {
  // if using `NEXTAUTH_SECRET` env variable, we detect it, and you won't actually need to `secret`
  // const token = await getToken({ req })
  const token = await getToken({ req, secret })
  console.log("JSON Web Token", token)
  res.end()
}
//Random secret key creator
// Go to terminal and paste it $ openssl rand -base64 32
