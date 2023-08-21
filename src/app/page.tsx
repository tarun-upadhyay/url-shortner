import Image from "next/image";
import Header from "./Components/Header";
import { getToken } from "next-auth/jwt";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      lorem*50
      <div>
        <p>{JSON.stringify(session)}</p>
        <button className="bg-orange-300 rounded-md p-2">Sign out</button>
      </div>
    </div>
  );
}
