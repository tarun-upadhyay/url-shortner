import Header from "./Components/Header";
import { getToken } from "next-auth/jwt";
import { getServerSession } from "next-auth";
import HomeUrlCreateor from "./Components/HomeUrlCreateor"
import { redirect } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]/options";
import Image from "next/image";
import homeImage from "../../public/home.png";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {/* Header Section */}

      <div className="flex sm:flex-col md:flex-row mx-auto mt-20 p-5 borde justify-between gap-30">
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
          <div className="md:w-[35%] mt-8 flex flex-col justify-center items-center space-y-3">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 md:mr-10 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-[3.5rem]"
            >
            Get Started for Free
            </button>
            <p className="text-blue-700 md:mr-10">Get a Quote</p>
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
      <HomeUrlCreateor/>
    </>
  );
}
