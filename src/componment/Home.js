import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContract, useNFTBalance, useMintNFT, useAddress, Web3Button, useMetamask, useDisconnect, useNetworkMismatch, useNetwork, ThirdwebNftMedia } from "@thirdweb-dev/react";
import "@thirdweb-dev/contracts/extension/ContractMetadata.sol";
import { abi } from "./abi"
const contractAddress = "0x7F53aa3dE31fEfaBda9B5628F11f929cf956F4ed";
const Home = () => {
  //const tokenId = 0
  const { contract } = useContract(contractAddress);
  const { mutateAsync: mintNft, data, isLoading, error } = useMintNFT(contract);
  const address = useAddress()
  const { NFTBalance } = useNFTBalance(contract, address)
  return (
    <>
      <Web3Button
        contractAbi={abi}
        contractAddress={contractAddress}
        action={() =>
          mintNft({
            metadata: {
              name: "My NFT",
              description: "This is my NFT",
              // image: "ipfs://example.com/my-nft.png", // Accepts any URL or File type
            },
            to: address, // Use useAddress hook to get current wallet address
          })
        }
      >
        Mint an NFT!
      </Web3Button>
    </>
  );
};
export default Home;
