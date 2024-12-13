import React from "react";
import Image from "next/image";
import ecellLogo from "../public/assets/E-Cell_white.png";
import epoch from "../public/assets/epoch.png";
import epochLogo from "../public/assets/epoch logo.png";
import neoLogo from "../public/assets/neo_logo.png";
import neoBannerLogo from "../public/assets/neo_black_full.png";

export default function Nav() {
  return (
    <div>
      <div className="bg-black flex px-4 justify-center">
        <Image
          src={ecellLogo}
          width={200}
          height={300}
          alt="E-Cell VNIT"
          priority
        />
        {/* <Image src={neoLogo} width={200} height={300} alt="E-Cell VNIT" /> */}
      </div>
      <div className="isolate bg-white px-4 py-4 sm:py-10 lg:px-4">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ef8c35] to-[#a25f24] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={neoLogo}
            width={80}
            height={10}
            alt="NEO VNIT"
            priority className="sm:w10"
          />
        <div className=" text-center">
          <h2 className="text-2xl pt-2 font-bold tracking-tight text-gray-900 sm:text-3xl">
            NATIONAL ENTREPRENEURSHIP OLYMPIAD 2025
          </h2>
          {/* <p className="mt-2 mb-0 text-lg leading-8 text-gray-600">
          
        </p> */}
        </div>
          </div>
        <div className="flex justify-center my-6">
          <Image
          src={epochLogo}
          width={100}
          height={100}
          alt="E-Cell Outreach Partner"
          />
          <div className="Outreach-Partner my-3">
            <h2 className="mx-4 text-orange-600 font-bold sm:text-2xl">Student Outreach Partner</h2>
            <h2 className="mx-4 font-bold sm:text-2xl">EPOCH Olympiad</h2>
          </div>
        </div>
        <div className=" text-center">
          <h2 className="text-1xl pt-2 font-bold tracking-tight text-gray-900 sm:text-2xl">
            REGISTRATION FORM
          </h2>
        </div>
      </div>
    </div>
  );
}
