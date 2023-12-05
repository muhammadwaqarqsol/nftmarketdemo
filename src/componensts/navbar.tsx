import React, { useState, useEffect } from "react";

import { useAccount } from "wagmi";
import { ConnectKitButton } from "connectkit";
import logoImage from "../utilities/logoImage.png";
import { Link } from "react-router-dom";
import CreateProfileModal from "./CreateProfile";
import Profile from "./Profile";
import axios from "axios";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { address, isConnected } = useAccount();
  const [data, setData] = useState<any>({});
  const [openProfile, setOpenProfile] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const fetchUser = async () => {
    try {
      axios
        .get(`http://localhost:5004/users/getsingleuser/${address}`)
        .then((res: any) => {
          console.log("user res", res);
          setData(res.data);
          res.data ? console.log(res) : setOpenModal(!openModal);
          isConnected
            ? res.data?.length !== 0
              ? console.log(res)
              : setOpenModal(!openModal)
            : setOpenModal(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // isConnected
    //   ? data?.length !== 0
    //     ? console.log("res effect")
    //     : setOpenModal(!openModal)
    //   : setOpenModal(true);
    if (address !== undefined) {
      localStorage.setItem("address", address);
      console.log("Hello");
      fetchUser();
    }
  }, [address]);
  return (
    <nav className="flex flex-wrap items-center justify-between p-6">
      <div className="mr-6 flex flex-shrink-0 items-center text-white lg:mr-72">
        <Link to="/">
          <img
            src={logoImage}
            className="h-15 mr-2 w-80 cursor-pointer"
            alt=""
          />
        </Link>
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
            className="text-white-200 mr-8 mt-4 block cursor-pointer
            text-[1.6rem] font-bold hover:text-purple-600 active:text-red-500
            lg:mt-0 lg:inline-block"
          >
            <Link to={`/MyNfts/${address}`}>My Nfts</Link>
          </a>
          <div
            className="text-white-200 mr-8 mt-4 block cursor-pointer
            text-[1.6rem] font-bold hover:text-purple-600 active:text-red-500
            lg:mt-0 lg:inline-block
            navbar-menu-content"
          >
            {isConnected ? (
              data ? (
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpenProfile(!openProfile)}
                >
                  Profile
                </a>
              ) : (
                <></>
              )
            ) : (
              ""
            )}
          </div>
        </div>
        <div>
          <ConnectKitButton />
        </div>
      </div>
      {openProfile && <Profile />}
      {openModal && <CreateProfileModal />}
    </nav>
  );
}
export default Navbar;
