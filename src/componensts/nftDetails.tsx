import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useAccount,
  useFeeData,
} from "wagmi";

type Data = {
  _id: string;
  title: string;
  ipfsHash: string | null;
  description: string | null;
  tokenId: string | null;
  ownerAddress: string | null;
  // attributes: Array<object> | undefined;
};

const NftDetailPage = () => {
  const [data, setData] = useState<Data | null>();
  // const [ownerAddress, setOwnerAddress] = useState();
  const [tokenId, setTokenId] = useState();
  const navigate = useNavigate();
  const params = useParams();

  // const { isConnected, address } = useAccount();
  async function fetchData() {
    try {
      await axios
        .get(`http://localhost:5004/nfts/getsinglenft/${params._id}`)
        .then((res) => {
          console.log("Res", res.data);
          setData(res.data);
          setTokenId(res.data.tokenId);
        });
    } catch (error) {
      console.log({ error });
    }
  }

  useEffect(() => {
    console.log("check", data);

    fetchData();
  }, []);

  return (
    <>
      <section className="body-font card explore-card overflow-hidden bg-white text-gray-700">
        <div className="container mx-auto px-5 py-24">
          <div className="mx-auto flex flex-wrap lg:w-4/5">
            <img
              alt="ecommerce"
              className="w-full rounded border border-gray-200 object-cover object-center lg:w-1/2"
              src={`https://ipfs.io/ipfs/${data?.ipfsHash}`}
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
              {/* <h1 className="title-font mb-1 text-3xl font-medium text-sky-400">
                Attributes
              </h1>
              <p className="leading-relaxed text-gray-400">
                {data?.attributes}
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NftDetailPage;
