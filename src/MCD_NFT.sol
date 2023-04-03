// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@thirdweb-dev/contracts/extension/interface/IMintableERC721.sol";

contract MesCodes is ERC721, ERC721Burnable, Ownable, IMintableERC721 {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("mesCodes", "MCD") {}

    function safeMint(address to) public onlyOwner {

    }
    
    function mintTo(address to, string calldata uri) external override returns (uint256) {
        // Your custom implementation here
                uint256 tokenId = _tokenIdCounter.current();
                _tokenIdCounter.increment();
                _safeMint(to, tokenId);
    }
}