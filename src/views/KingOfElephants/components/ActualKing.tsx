import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import { useForest } from 'hooks/useContract'
import { claimForest } from 'utils/callHelpers'
import { useWallet } from '@binance-chain/bsc-use-wallet'

const StyledCard = styled(Card)`
  background-image: url(/images/egg/last_king2.gif);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
`
const ActualKing = ({ lastBidder, hasWinner }) => {
  const { account } = useWallet()
  const forestContract = useForest()
  const [isClaiming, setIsClaiming] = useState(false)
  const onClaim = async () => {
    setIsClaiming(true)
    try {
      await claimForest(forestContract, account)
    } catch (e) {
      console.error(e)
    }
    setIsClaiming(false)
  }

  return (
    <StyledCard>
      <CardBody>
        <Heading size="xl" mt="10px" mb="40px" color="white">
          Current King
        </Heading>
        {lastBidder && (
          <Text ml="30px" color="white" fontSize="24px">
            Last bidder: {lastBidder.slice(0, 8)}...{lastBidder.slice(-8)}
          </Text>
        )}
        <Text marginTop="20px">
          {hasWinner && account && (
            <Button onClick={onClaim} disabled={isClaiming} mt="20px" fullWidth>
              Restart Game
            </Button>
          )}
        </Text>
      </CardBody>
    </StyledCard>
  )
}

export default ActualKing