import React, { useState, useEffect } from "react";

import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useAccount,
  useFeeData,
} from "wagmi";

type Data = {
  id: string;
  title: string;
  ipfsHash: string | null;
  description: string | null;
  tokenId: string | null;
  ownerAddress: string | null;
};

const NftDetailPage = () => {
  const [data, setData] = useState<Data | null>();
  const [openInputModal, setOpenInputModal] = useState(false);
  const [price, setPrice] = useState("");

  return (
    <>
      <section className="body-font card explore-card overflow-hidden bg-white text-gray-700">
        <div className="container mx-auto px-5 py-24">
          <div className="mx-auto flex flex-wrap lg:w-4/5">
            <img
              alt="ecommerce"
              className="w-full rounded border border-gray-200 object-cover object-center lg:w-1/2"
              src={data?.ipfsHash ?? ""}
            />
            <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
              <h1 className="title-font mb-1 text-3xl font-medium text-sky-400">
                {data?.title}
              </h1>

              <p className="leading-relaxed text-gray-400">
                {data?.description}
              </p>
              <p className="leading-relaxed text-gray-400">
                Owner Address: {data?.ownerAddress}
              </p>

              <p className="leading-relaxed text-gray-400">
                Token Id : {data?.tokenId}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NftDetailPage;
