import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync, updateUserStakedBalance, updateUserBalance } from 'state/actions'
import { stake, smartStakeBnb, smartStake } from 'utils/callHelpers'
import { useMasterchef, useSmartChef } from './useContract'

const useStake = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(masterChefContract, pid, amount, account)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, masterChefContract, pid],
  )

  return { onStake: handleStake }
}


export const useSmartStake = (sousId: number, isUsingBnb = false) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const smartChefContract = useSmartChef(sousId)

  const handleStake = useCallback(
    async (amount: string) => {
      const stakeFn = isUsingBnb ? smartStakeBnb : smartStake
      await stakeFn(smartChefContract, amount, account)
      dispatch(updateUserStakedBalance(String(sousId), account))
      dispatch(updateUserBalance(String(sousId), account))
    },
    [account, dispatch, isUsingBnb, smartChefContract, sousId],
  )

  return { onStake: handleStake }
}

export default useStake
