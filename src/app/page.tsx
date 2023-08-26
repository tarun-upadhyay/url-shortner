import Header from "./Components/Header";
import { getToken } from "next-auth/jwt";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { useRouter } from "next/router";
import Image from "next/image";
import homeImage from "../../public/home.png";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session, "server side");
  return (
    <div>
      {/* Header Section */}

      <div className="flex sm:flex-col md:flex-row mx-auto mt-20 w-4.5/5 p-5 borde justify-between gap-30">
        <div className="flex flex-col p-5 md:w-[80%]">
          <h1 className="text-[40px] leading-[48px] font-medium text-heading">
            Make every connection count
          </h1>
          <p className="text-2xl font-thin mt-2 text-para">
            Create short links, QR Codes, and Link-in-bio pages.
          </p>
          <p className="text-2xl font-thin text-para">
            Share them anywhere. Track what’s working, and what’s not.
          </p>
          <p className="text-2xl font-extralight text-para">
            {" "}
            All inside the Bitly Connections Platform.
          </p>
          <div className="md:w-[40%] border mt-5 flex flex-col">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-[3rem]"
            >
            Get Started for Free
            </button>
          </div>
        </div>
        <div className="space-x-5">
          <Image
            src={homeImage}
            width={300}
            alt="homeimg"
            className="h-[300px] w-[500px]"
          />
        </div>
      </div>
    </div>
  );
}
