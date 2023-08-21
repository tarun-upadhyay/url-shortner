import { connect } from "@/database/mongo.config";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import { User } from "@/models/User";

export const authOptions: AuthOptions = {
  pages: {
    //here we are telling to use custom page
    signIn: "/login",
  },

  //here we are storing password
  callbacks: {
    async signIn({ user, account, profile, credentials }) {
      connect();
      console.log(
        user,
        "user",
        "email=>",

        "account=>",
        "checking",
        account
      );
      try {
        const findUser = await User.findOne({ email: user.email });
        if (findUser) {
          return true;
        }
        await User.create({ email: user.email, name: user.name });
        return true;
      } catch (error) {
        console.log("The error is ", error);
        return false;
      }
    },
  },

  providers: [
    CredentialsProvider({
      name: "Welcome Back",
      type: "credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // * Connect to the MongoDb
        //ye hamara wala hai jo create kia hai humne
        // console.info(
        //   "The credentials and req info",
        //   credentials,
        //   "checking",
        //   req,
        //   "bye bye"
        // );
        connect();
        const user = await User.findOne({ email: credentials?.email });
        console.log(user);
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),

    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),
    // ...add more providers here
  ],
};
