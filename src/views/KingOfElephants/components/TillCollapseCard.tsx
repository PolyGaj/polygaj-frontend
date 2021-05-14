
import React from 'react'
import styled from 'styled-components'
import Countdown from 'react-countdown'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
// import { claimForest } from 'utils/callHelpers'
// import { useForest } from 'hooks/useContract'
import useTokenBalance from 'hooks/useTokenBalance'
import { getCakeAddress, getForestAddress } from 'utils/addressHelpers'
import { usePriceCakeBusd } from 'state/hooks'
import CardValue from 'views/Home/components/CardValue'
import { getFullDisplayBalance } from 'utils/formatBalance'
// import useRefresh from 'hooks/useRefresh'
import getRpcUrl from 'utils/getRpcUrl'
import UnlockButton from 'components/UnlockButton'


const StyledCard = styled(Card)`
  min-height: 365px;
  background-image: url(/images/forest/ForestBackground6.gif);
  background-position: center right;
  background-repeat: repeat;
  background-size: cover;
`

const Adventure = styled.div`
    background: -webkit-linear-gradient(#c91919, #f5ff00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const QuesionHelperPositioner = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  float: right;
`

interface TillCollapseCardProps {
  hasWinner,
  nextStartTime,
  lastBidTime,
  endOfAuction,
}

const TillCollapseCard: React.FC<TillCollapseCardProps> = ({ hasWinner, nextStartTime, lastBidTime, endOfAuction }) => {
  // const forestContract = useForest()
  const balance = useTokenBalance(getCakeAddress(), getForestAddress(), getRpcUrl())
  const seedPriceInUsd = usePriceCakeBusd()
  const balanceInUsd = balance.multipliedBy(seedPriceInUsd)
  // const [isClaiming, setIsClaiming] = useState(false)
  const { account } = useWallet()
  // const onClaim = async () => {
  //   setIsClaiming(true)
  //   try {
  //     await claimForest(forestContract, account)  
  //   } catch (e) {
  //     console.error(e)
  //   }
  //   setIsClaiming(false)
  // }

  // Check if is time to start a new game
  const isWaitingForNextGame = nextStartTime * 1000 > Date.now()

  // const isEnding = endData && endData.lastBidTime !== 0
  const isRunning = lastBidTime !== 0

  // DEBUG DATA
  // const obj = { isWaitingForNextGame, isRunning, hasWinner, nextStartTime, lastBidTime, endOfAuction }
  // console.log('DEBUG FOREST DATA =>', obj)

  return (
    <StyledCard>
      <CardBody>
        {isWaitingForNextGame ? (
          <Text fontSize="60px" mb="10px" color="primary">
            <Adventure>Next Round</Adventure>
            <Countdown date={nextStartTime * 1000}/>
            <br/>
            <Text fontSize="30px" color="primary">Prepare for battle!</Text>
          </Text>
        ) : (
          <>
            <Heading size="xl" mb="10px" color="primary">
              Round status
            </Heading>
            {isRunning ? (
              <div>
              <Text fontSize="60px" mb="10px" color="primary">
                {hasWinner ? <Adventure>Waiting for claim</Adventure> : <Countdown key={endOfAuction} date={endOfAuction}/>}
              </Text>
              </div>
            ) : (
              <div>
              
              <Text  fontSize="60px" mb="10px" color="primary">
                <Adventure>Waiting for Bids</Adventure>
              </Text>
              </div>
            )}
            <Heading size="xl" mb="10px" color="primary">
              Pot
              <CardValue value={parseFloat(getFullDisplayBalance(balance))} decimals={2} />
              <CardValue
                value={parseFloat(getFullDisplayBalance(balanceInUsd))}
                prefix="~$"
                decimals={2}
                fontSize="24px"
              />
            </Heading>
          </>
        )}
        <Text marginTop="20px">
          {!account && <UnlockButton mr="10px" mt="20px" />}
          {/* hasWinner && account && (
            <Button ml="10px" onClick={onClaim} disabled={isClaiming} mt="20px">
              Restart Game
            </Button>
          ) */}
        </Text>
      </CardBody>
    </StyledCard>
  )
}

export default TillCollapseCard
