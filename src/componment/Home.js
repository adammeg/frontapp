import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContract, useNFTs, useMintNFT, useAddress, Web3Button, useMetamask,useDisconnect,useNetworkMismatch, useNetwork, ThirdwebNftMedia } from "@thirdweb-dev/react";
import "@thirdweb-dev/contracts/extension/ContractMetadata.sol";
import {abi} from "./abi"
const contractAddress = "0x7F53aa3dE31fEfaBda9B5628F11f929cf956F4ed";
const Home = () => { 
  const { contract } = useContract(contractAddress);
  const { mutateAsync: mintNft,data , isLoading, error } = useMintNFT(contract);
  const address = useAddress()
    return (
      <Web3Button
  contractAbi = {abi}
  contractAddress={contractAddress}
  action={() =>
    mintNft({
      metadata: {
        name: "My NFT",
        description: "This is my NFT",
       // image: "ipfs://example.com/my-nft.png", // Accepts any URL or File type
      },
      to: address , // Use useAddress hook to get current wallet address
    })
  }
>
  Mint an NFT!
</Web3Button>

/*         <div>
          {address ? (
            <>
              <a onClick={disconnectWallet}>Disconnect Wallet</a>
              <p>Your address: {address}</p>
            </>
          ) : (
            <a onClick={connectWithMetamask}>Connect Wallet</a>
          )}
      
          {!loading ? (
            <div>
              {nfts?.map((nft) => (
                <div key={nft.metadata.id.toString()}>
                  <ThirdwebNftMedia metadata={nft.metadata} />
                  <h3>{nft.metadata.name}</h3>
                  <p>Owner: {nft.owner.slice(0, 6)}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading NFTs...</p>
          )}
      
          <button onClick={mintAnNft}>{minting ? "Minting..." : "Mint NFT"}</button>
        </div> 

        contractAddress={contract}
        action={() =>
          mintNft({
            metadata: {
              name: "My NFT",
              description: "This is my NFT",
              image: "ipfs://example.com/my-nft.png", // Accepts any URL or File type
            },
            to: "{{wallet_address}}", // Use useAddress hook to get current wallet address
          })
        }
     */

      );
}; 
export default Home;
