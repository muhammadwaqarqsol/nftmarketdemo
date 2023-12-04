import React from "react";
import NftCard from "./NftCard";

import { useAccount } from "wagmi";

const NftCardContainer = () => {
  const { isConnected } = useAccount();

  return (
    <section className="section explore" id="explore">
      <div className="container">
        <p className="section-subtitle">Exclusive Assets</p>

        <div className="title-wrapper">
          <h2 className="h2 section-title">Explore</h2>
        </div>

        {/* <ul className="grid-list">
          {data?.map((e, i) => {
            return (
              <li key={i}>
                <NftCard
                  src={e.ipfsHash}
                  title={e.title}
                  ownerAddress={e.ownerAddress}
                  price={e.price}
                  active={e.active}
                  id={e.id}
                />
              </li>
            );
          })}
        </ul> */}
        <ul className="grid-list">
          <li>
            <NftCard
              src={"www.helloWorld.com"}
              title={"Hello Man"}
              ownerAddress={"0x00000000000000000000000000000000000000000000"}
              id={"1"}
            />
          </li>
          <li>
            <NftCard
              src={"www.helloWorld.com"}
              title={"Hello Man"}
              ownerAddress={"0x00000000000000000000000000000000000000000000"}
              id={"1"}
            />
          </li>
          <li>
            <NftCard
              src={"www.helloWorld.com"}
              title={"Hello Man"}
              ownerAddress={"0x00000000000000000000000000000000000000000000"}
              id={"1"}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NftCardContainer;
