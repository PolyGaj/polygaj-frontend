const getLastBidTime = (forestContract) => {
    return forestContract.methods.lastBidTime().call()
  }
  
   const getLastBidder = (forestContract) => {
    return forestContract.methods.lastBidder().call()
  }
  
   const getHasWinner = (forestContract) => {
    return forestContract.methods.hasWinner().call()
  }
  
   const getNextStartTime = (forestContract) => {
    return forestContract.methods.nextStartTime().call()
  }
  
   const getBidAmount = (forestContract) => {
    return forestContract.methods.bidAmount().call()
  }
  
  const getEndDelay = (forestContract) => {
    return forestContract.methods.endDelay().call()
  }
  
  // export const getCollapseData = async (forestContract) => {
  //   const lastBidTime = parseInt(await getLastBidTime(forestContract))
  //   const endDelay = parseInt(await getEndDelay(forestContract))
  
  //   return {
  //     lastBidTime,
  //     endDelay,
  //     collapseDate: (lastBidTime + endDelay) * 1000,
  //   }
  // }
  
  // Fetch all data in one function
  // It would be better to have a structure to fetch from the smart contract
  
  // eslint-disable-next-line import/prefer-default-export
  export const getAllForestData = async (forestContract) => {
    const lastBidder = await getLastBidder(forestContract)
    const hasWinner = await getHasWinner(forestContract)
    const nextStartTime = await getNextStartTime(forestContract)
    const bidAmount = await getBidAmount(forestContract)
    const lastBidTime = parseInt(await getLastBidTime(forestContract))
    const _endDelay = parseInt(await getEndDelay(forestContract))
    const endOfAuction = (lastBidTime + _endDelay) * 1000
    return {
      lastBidTime,
      lastBidder,
      hasWinner,
      nextStartTime,
      bidAmount,
      endOfAuction,
    }
  }