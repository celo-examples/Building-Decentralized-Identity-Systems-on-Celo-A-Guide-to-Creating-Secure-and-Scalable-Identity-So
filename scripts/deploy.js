const main = async () => {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Identity = await ethers.getContractFactory("Identity");
  const identity = await Identity.deploy();
  await identity.deployed();

  console.log("Identity contract deployed to:", identity.address);
};

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
