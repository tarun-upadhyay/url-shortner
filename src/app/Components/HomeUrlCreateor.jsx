"use client";
import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tooltip,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  AiOutlineLink,
  AiOutlineQrcode,
  AiFillInfoCircle,
} from "react-icons/ai";
import { TiTick } from "react-icons/ti";
const HomeUrlCreateor = () => {
  const data = [
    {
      label: "Short link",
      value: "shortlink",
      icon: AiOutlineLink,
    },
    {
      label: "QR Code",
      value: "settings",
      icon: AiOutlineQrcode,
    },
  ];
  return (
    <ThemeProvider>
      <div className="mt-5 bg-[#f5f6f7] w-[100%]">
        <div className="text-red border w-[90%] m-auto p-12">
          <h1 className="text-heading text-[40px] text-center font-bold">
            What would you like to create?
          </h1>
          <div className="bg-white md:w-[90%] m-auto mt-10 p-10 pt-16">
            <Tabs value="shortlink">
              <TabsHeader>
                {data.map(({ label, value, icon }) => (
                  <Tab key={value} value={value}>
                    <div className="flex items-center gap-2 text-xl">
                      {React.createElement(icon, { className: "w-5 h-5" })}
                      {label}
                    </div>
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {data.map(({ value, desc }) => (
                  <TabPanel
                    key={value}
                    value={value}
                    className="p-0 text-poppins"
                  >
                    <div className="bg-white p-8">
                      <h1 className="text-heading text-3xl font-bold text-poppins">
                        Shorten a long link
                      </h1>
                      <p className="font-semibold my-2 text-xl">
                        Paste a long URL
                      </p>
                      <Input
                        label="Example:http://super-long-link.com/shorten-it"
                        className="text-4xl h-[3rem] p-10"
                      />
                      <div className="flex gap-5 border-red-700 items-center my-3">
                        <div className=" w-1/5">
                          <p className="font-semibold my-2 text-xl">Domain</p>
                          <Input
                            label="urlshorten"
                            disabled
                            className="text-4xl h-[3rem] p-10"
                          />
                        </div>
                        <div className="text-4xl font-bold md:block sm:hidden mt-10">
                          /
                        </div>
                        <div className="w-4/5 ">
                          <p className="font-semibold my-2 text-xl flex items-center">
                            Enter a back-half{" "}
                            <span className="font-light text-lg">
                              (optional){" "}
                            </span>{" "}
                            <div>
                              <AiFillInfoCircle className="ml-3" />
                            </div>
                          </p>
                          <Input
                            label="example: Favorite-link"
                            className="text-4xl h-[3rem] p-10"
                          />
                        </div>
                      </div>

                      <div className="bg-[#ecfdff] my-5 flex items-center gap-3 p-4 rounde rounded-lg">
                        <img
                          src="https://docrdsfx76ssb.cloudfront.net/static/1692819390/pages/wp-content/uploads/2023/02/stars.svg"
                          alt="chmkila"
                        />
                        <p className="text-[#007c8c]">
                          {" "}
                          End your link with words that will make it unique
                        </p>
                      </div>
                      <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 md:mr-10 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-[3.5rem]"
                      >
                        Sign up and get your link
                      </button>
                    </div>
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
            <div className="text-center m-4">
              <article className="text-center font-bold text-2xl">
                No credit card required. Your free plan includes:
              </article>
              <div
                id="logo "
                className="flex justify-between w-[50%] m-auto mt-3"
              >
                <div className="flex gap-2 items-center text-xl">
                  <TiTick className="text-blue-700 rounded-full border-blue-700 border text-xl" />
                  Short links
                </div>
                <div className="flex gap-2 items-center text-xl">
                  <TiTick className="text-blue-700 rounded-full border-blue-700 border text-xl" />
                  QR Codes
                </div>
                <div className="flex gap-2 items-center text-xl">
                  <TiTick className="text-blue-700 rounded-full border-blue-700 border text-xl" />
                  Link-in-bio page
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HomeUrlCreateor;
