import type { NextAuthOptions } from "next-auth";

export const options: NextAuthOptions = {
    providers:[],
    pages:{
        signIn: "/sigin"
    }
}

//Random secret key creator 
// Go to terminal and paste it $ openssl rand -base64 32