import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, LinkExternal, Flex } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import { usePriceCakeBusd } from '../../../state/hooks'
import useTokenBalance from '../../../hooks/useTokenBalance'
import { getCakeAddress } from '../../../utils/addressHelpers'
import useAllEarnings from '../../../hooks/useAllEarnings'
import { getBalanceNumber } from '../../../utils/formatBalance'

const StyledFarmStakingCard = styled(Card)`
  background-image: url('/images/farm-space/astro.png');
  background-size: 256px;
  background-repeat: no-repeat;
  background-position: bottom right;
  min-height: 100%;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const TokenImageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0px;
`

const CardImage = styled.img`
  margin-bottom: 0px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const token = getCakeAddress();

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const FarmsWithBalance = useFarmsWithBalance()
  const balancesWithValue = FarmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  const addWatchJaguarToken = useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const provider = window.ethereum
    if (provider) {
      try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await provider.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: token,
              symbol: 'GAJ',
              decimals: '18',
              image: '/logo.png',
            },
          },
        })

        if (wasAdded) {
          console.log('Token was added')
        }
      } catch (error) {
        // TODO: find a way to handle when the user rejects transaction or it fails
      }
    }
  }, [])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          Add GAJ
        </Heading>
        <Flex flexDirection="column" mb="15px">
          <LinkExternal mb="20px" small href={`https://explorer-mainnet.maticvigil.com/tokens/${token}`}>
            {token}
          </LinkExternal>
        </Flex>
        <TokenImageWrapper>
          <CardImage src="/images/egg/9.png" alt="Farm GAJ logo" width={60} height={60} />
          <hr/>
          <Button onClick={addWatchJaguarToken} size="sm">
            + Add GAJ to <img style={{ marginLeft: 8 }} width={16} src="https://jaguarswap.com/images/tokens/metamask.png" alt="metamask logo" />
          </Button>
        </TokenImageWrapper>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard