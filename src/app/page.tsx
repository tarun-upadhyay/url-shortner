import Header from "./Components/Header";
import { getToken } from "next-auth/jwt";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { useRouter } from "next/router";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session, "server side");
  return (
    <div>
      lorem*50
      <div>
        <p></p>

    
      </div>
    </div>
  );
}
