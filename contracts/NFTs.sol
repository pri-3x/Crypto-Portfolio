// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTCreator is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    address payable public admin;
    uint public mintFee = 0.00025 ether;

    Counters.Counter private _tokenIds;

    struct NFTData {
        uint256 tokenId;
        address creator;
        string tokenURI;
    }

    // To store the data of all NFTs created in the contract
    NFTData[] private allNFTs;

    // Mapping from user address to list of NFTs created by the user
    mapping(address => NFTData[]) private userCreatedNFTs;

    // Mapping from user address to list of NFTs currently owned by the user
    mapping(address => NFTData[]) private userOwnedNFTs;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    constructor() ERC721("@theblockchaincoders", "@TBC") Ownable(msg.sender) {
        admin = payable(msg.sender);
    }

    // Function to mint a new NFT and assign it to the 'msg.sender'
    function mint(string memory tokenURI) payable external
        returns (uint256)
    {
        require(msg.value == mintFee, "Incorrect registration fee");
        _tokenIds.increment();
        uint256 tokenId = _tokenIds.current();

        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);

        // Create the NFT data structure
        NFTData memory newNFT = NFTData({
            tokenId: tokenId,
            creator: msg.sender,
            tokenURI: tokenURI
        });

        // Track the NFT created by the user and add to owned NFTs
        allNFTs.push(newNFT);
        userCreatedNFTs[msg.sender].push(newNFT);
        userOwnedNFTs[msg.sender].push(newNFT);

        payable(admin).transfer(msg.value);

        return tokenId;

    }

    // Function to fetch all NFTs currently owned by a user
    function fetchUserOwnedNFTs(address user) external view returns (NFTData[] memory) {
        return userOwnedNFTs[user];
    }

    // Function to fetch all NFTs created by a user
    function fetchUserCreatedNFTs(address user) external view returns (NFTData[] memory) {
        return userCreatedNFTs[user];
    }

    // Function to transfer an NFT to another address and update ownership data
    function transferNFT(address from, address to, uint256 tokenId) external {
        // Check if the caller is the owner or has been approved to transfer
        require(
            _isApprovedOrOwner(msg.sender, tokenId),
            "Caller is not owner nor approved"
        );

        // Transfer the NFT
        safeTransferFrom(from, to, tokenId);

        // Find the NFT data
        NFTData memory transferredNFT;
        bool found = false;

        // Search for the NFT in the user's owned NFTs
        for (uint256 i = 0; i < userOwnedNFTs[from].length; i++) {
            if (userOwnedNFTs[from][i].tokenId == tokenId) {
                transferredNFT = userOwnedNFTs[from][i];
                found = true;
                break;
            }
        }

        // Ensure the NFT was found
        require(found, "NFT not found in user's owned NFTs");

        // Update the ownership for the 'to' address
        userOwnedNFTs[to].push(transferredNFT);

        // Remove the NFT from the sender's owned NFTs
        _removeNFTFromUser(from, tokenId);
    }

    // Internal function to remove an NFT from a user's owned NFT list
    function _removeNFTFromUser(address user, uint256 tokenId) internal {
        NFTData[] storage nfts = userOwnedNFTs[user];
        for (uint256 i = 0; i < nfts.length; i++) {
            if (nfts[i].tokenId == tokenId) {
                // Move the last element into the place of the one to remove
                nfts[i] = nfts[nfts.length - 1];
                nfts.pop(); // Remove the last element
                break;
            }
        }
    }

    // Internal helper to check if the caller is owner or approved to transfer
    function _isApprovedOrOwner(address spender, uint256 tokenId) internal view returns (bool) {
        return (getApproved(tokenId) == spender || isApprovedForAll(ownerOf(tokenId), spender) || ownerOf(tokenId) == spender);
    }

    function updateMintFee(uint _newFee) public onlyAdmin {
        mintFee = _newFee;
    }

    
}
