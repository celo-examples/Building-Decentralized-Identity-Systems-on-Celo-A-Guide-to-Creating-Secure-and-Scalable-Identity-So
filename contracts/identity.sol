 // SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Identity {
    struct Claim {
       string key;
       string value;
    }

    mapping(address => bool) public isVerified;
    mapping(address => Claim[]) public identityClaims;

    function verify(address account) external {
       isVerified[account] = true;
    }

    function addClaim(string memory key, string memory value) external {
       require(isVerified[msg.sender], "Sender must be a verified account.");
       identityClaims[msg.sender].push(Claim(key, value));
    }

    function getClaims(address account) external view returns (Claim[] memory) {
       return identityClaims[account];
    }
}
