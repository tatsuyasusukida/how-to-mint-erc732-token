main()

async function main () {
  try {
    const SusukidaNFT = await ethers.getContractFactory('SusukidaNFT')
    const susukidaNFT = await SusukidaNFT.deploy()

    console.info(`Contract deployed to address: ${susukidaNFT.address}`)
    console.info(`https://goerli.etherscan.io/address/${susukidaNFT.address}`)
  } catch (err) {
    console.error(err)
  }
}
