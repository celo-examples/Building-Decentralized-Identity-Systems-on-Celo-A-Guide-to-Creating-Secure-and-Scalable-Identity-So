const { expect } = require("chai");
   const { ethers } = require("hardhat");
   const getCeloKit = require("../celo");

    describe("Identity", function () {
        let identity;
        let accounts;
        let kit;

    before(async function () {
       kit = getCeloKit();
       accounts = await ethers.getSigners();
       const Identity = await ethers.getContractFactory("Identity");
       identity = await Identity.deploy();
       await identity.deployed();
    });

    it("should verify an account", async function () {
       const [account] = accounts;
       await identity.verify(account.address);
       const isVerified = await identity.isVerified(account.address);
       expect(isVerified).to.be.true;
    });

    it("should add a claim", async function () {
       const [account] = accounts;
       await identity.verify(account.address);
       const key = "name";
       const value = "Alice";
       await identity.addClaim(key, value);
       const claims = await identity.getClaims(account.address);
       expect(claims).to.have.lengthOf(1);
       expect(claims[0].key).to.equal(key);
       expect(claims[0].value).to.equal(value);
    });
});
