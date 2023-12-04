import React, { useState, useEffect } from "react";

import { useAccount } from "wagmi";
import { ConnectKitButton } from "connectkit";
import logoImage from "../utilities/logoImage.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between p-6">
      <div className="mr-6 flex flex-shrink-0 items-center text-white lg:mr-72">
        {/* <img src={logoImage} className="w-100 mr-2 h-10" alt="Logo" /> */}
        {/* <Image
          onClick={() => router.push("/")}
          src={logoImage}
          className="h-15 mr-2 w-80 cursor-pointer"
          alt="Logo"
        ></Image> */}
        <img src={logoImage} className="h-15 mr-2 w-80 cursor-pointer" alt="" />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black-500 hover:text-black-400 flex items-center rounded px-3 py-2"
        >
          <svg
            className={`h-10 w-10 fill-current ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`h-10 w-10 fill-current ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`block w-full flex-grow lg:flex lg:w-auto lg:items-center ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            // href="/exploreNfts"
            className={`text-white-200 mr-8 mt-4 block cursor-pointer text-[1.6rem] font-bold hover:text-purple-600 active:text-red-500 lg:mt-0 lg:inline-block`}
            // onClick={() => router.push("/exploreNfts")}
          >
            <Link to="/ExploreNfts">Explore Nfts</Link>
          </a>
          <a
            // href="/createNft"
            className="text-white-200 mr-8 mt-4 block cursor-pointer text-[1.6rem] font-bold hover:text-purple-600 active:text-red-500 lg:mt-0 lg:inline-block"
          >
            <Link to="/MintNft">Create Nft</Link>
          </a>
          <a
            href={`/OwnerNfts/ownerAddress`}
            className="text-white-200 mr-8 mt-4 block cursor-pointer
            text-[1.6rem] font-bold hover:text-purple-600 active:text-red-500
            lg:mt-0 lg:inline-block"
          >
            My Nfts
          </a>
          {/* {data ? (
            <a
              // href=""
              className="text-white-200 mr-4 mt-4 block text-[1.6rem] font-bold hover:text-purple-600 active:text-red-500 lg:mt-0 lg:inline-block"
            >
              <Menubar className="w-[90px]">
                <MenubarMenu>
                  <MenubarTrigger className="cursor-pointer border-0 text-[1.6rem] font-bold">
                    Profile
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarRadioItem value="andy" className="text-[1.3rem]">
                      {name}
                    </MenubarRadioItem>
                    <MenubarRadioItem value="benoit" className="text-[1.3rem]">
                      {email}
                    </MenubarRadioItem>
                    <MenubarRadioItem value="Luis" className="text-[1.3rem]">
                      {walletAddress}
                    </MenubarRadioItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </a>
          ) : (
            ""
          )} */}
        </div>
        <div>
          <ConnectKitButton />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
