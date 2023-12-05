import React from "react";
import NftCardContainer from "../componensts/NftCardContainer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import NftCard from "../componensts/NftCard";

export const MyNfts = () => {
  const [data, setData] = useState([]);
  const { isConnected, address } = useAccount();
  const params = useParams();
  async function fetchData() {
    try {
      await axios
        .get(`http://localhost:5004/nfts/getownersnfts/${params.ownerAddress}`)
        .then((res) => {
          console.log("Res", res.data);
          setData(res.data);
        });
    } catch (error) {
      console.log({ error });
    }
  }

  useEffect(() => {
    // setOwnerAddress(localStorage.getItem("address"));
    console.log("check", data);
    // if (data.length === 0) {
    fetchData();
    // }
  }, []);
  return (
    <div>
      <section className="section explore" id="explore">
        {isConnected ? (
          <div className="container">
            <p className="section-subtitle">Exclusive Assets You Owned</p>

            <div className="title-wrapper">
              <h2 className="h2 section-title">Explore Your Own Nfts</h2>
            </div>

            {/* <ul className="grid-list">
              {data?.map((e, i) => {
                return (
                  <li key={i}>
                    <NftCard
                      src={e.ipfsHash}
                      title={e.title}
                      ownerAddress={e.ownerAddress}
                      id={e.id}
                    />
                  </li>
                );
              })}
            </ul> */}
          </div>
        ) : (
          <div className="container">
            <p className="section-subtitle">Exclusive Assets You Owned</p>

            <div className="title-wrapper">
              <h2 className="h2 section-title">Explore Your Own Nfts</h2>
            </div>

            <h1>Please Login.</h1>
          </div>
        )}
      </section>
    </div>
  );
};
