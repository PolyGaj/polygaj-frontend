import poolsConfig from 'config/constants/pools'
import sousChefABI from 'config/abi/sousChef.json'
import cakeABI from 'config/abi/cake.json'
import multicall from 'utils/multicall'
import BigNumber from 'bignumber.js'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

export const fetchPoolsBlockLimits = async () => {
  const cakePools = poolsConfig
  const cakeStarts = await multicall(
    sousChefABI,
    cakePools.map((cakePool) => ({
      address: cakePool.contractAddress[CHAIN_ID],
      name: 'startBlock',
    })),
  )
  const cakeEnds = await multicall(
    sousChefABI,
    cakePools.map((cakePool) => ({
      address: cakePool.contractAddress[CHAIN_ID],
      name: 'bonusEndBlock',
    })),
  )

  return [
    ...cakePools.map((poolConfig, index) => {
      const startBlock = cakeStarts[index]
      const endBlock = cakeEnds[index]
      return {
        sousId: poolConfig.sousId,
        startBlock: new BigNumber(startBlock).toJSON(),
        endBlock: new BigNumber(endBlock).toJSON(),
      }
    }),
  ]
}

export const fetchPoolsTotalStaking = async () => {
  const cakePools = poolsConfig
  const cakePoolsTotalStaked = await multicall(
    cakeABI,
    cakePools.map((cakePool) => ({
      address: cakePool.stakingTokenAddress[CHAIN_ID],
      name: 'balanceOf',
      params: [cakePool.contractAddress[CHAIN_ID]],
    })),
  )

  return [
    ...cakePools.map((p, index) => ({
      sousId: p.sousId,
      totalStaked: new BigNumber(cakePoolsTotalStaked[index]).toJSON(),
    })),
  ]
}
