import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import cakeABI from 'config/abi/cake.json'
import { getContract } from 'utils/web3'
import { getTokenBalance } from 'utils/erc20'
import {getLotteryAddress, getCakeAddress} from 'utils/addressHelpers'
import multicall from 'utils/multicall'
import erc20 from 'config/abi/erc20.json'
import useRefresh from './useRefresh'

// const useTokenBalance = (tokenAddress: string) => {
//   const [balance, setBalance] = useState(new BigNumber(0))
//   const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
//   const { fastRefresh } = useRefresh()
//
//   useEffect(() => {
//     const fetchBalance = async () => {
//       const res = await getTokenBalance(ethereum, tokenAddress, account)
//       setBalance(new BigNumber(res))
//     }
//
//     if (account && ethereum) {
//       fetchBalance()
//     }
//   }, [account, ethereum, tokenAddress, fastRefresh])
//
//   return balance
// }

const useTokenBalance = (tokenAddress: string, _account?: string, _provider?: any) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account: useAccount, ethereum }: { account: string; ethereum: provider } = useWallet()
  const { fastRefresh } = useRefresh()
  const account = _account || useAccount;
  const currentProvider = _provider || ethereum;

  useEffect(() => {
    const fetchBalance = async () => {
      const res = await getTokenBalance(currentProvider, tokenAddress, account)
      setBalance(new BigNumber(res))
    }

    if (account && currentProvider) {
      fetchBalance()
    }
  }, [account, currentProvider, tokenAddress, fastRefresh])

  return balance
}

export const useTotalSupply = () => {
  const { slowRefresh } = useRefresh()
  const [totalSupply, setTotalSupply] = useState<BigNumber>()

  useEffect(() => {
    async function fetchTotalSupply() {
      const cakeContract = getContract(cakeABI, getCakeAddress())
      const supply = await cakeContract.methods.totalSupply().call()
      setTotalSupply(new BigNumber(supply))
    }

    fetchTotalSupply()
  }, [slowRefresh])

  return totalSupply
}

export const useBurnedBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const cakeContract = getContract(cakeABI, getCakeAddress())
      const bal = await cakeContract.methods.balanceOf('0x000000000000000000000000000000000000dEaD').call()
      setBalance(new BigNumber(bal))
    }

    fetchBalance()
  }, [tokenAddress, slowRefresh])

  return balance
}

export const useLotteryLockedBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const burnAddress = getLotteryAddress()
      const [burnedCakeBalance] = await multicall(erc20, [
        {
          address: tokenAddress,
          name: 'balanceOf',
          params: [burnAddress],
        },
      ])

      if (!burnedCakeBalance) return

      setBalance(new BigNumber(burnedCakeBalance))
    }

    fetchBalance()
  }, [slowRefresh, tokenAddress])

  if (!balance) {
    return new BigNumber(0)
  }

  return balance
}

export default useTokenBalance
