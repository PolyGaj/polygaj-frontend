import React from 'react'
import styled from 'styled-components'
import Cookies from 'universal-cookie';
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import rot13 from '../../utils/encode'
// import LotteryCard from './components/LotteryCard'
import { isAddress } from '../../utils/web3'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import EarnAPRCard from './components/EarnAPRCard'
import EarnAssetCard from './components/EarnAssetCard'
import WinCard from './components/WinCard'
import Timer from './components/Timer'
import MetaMask from './components/Metamask'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/egg/3ba.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/egg/3.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const Home: React.FC = () => {
    const TranslateString = useI18n()
    const cookies = new Cookies();

    return (
        <Page>
            <Hero>
                <Heading as="h1" size="xl" mb="24px" color="secondary">
                    PolyGaj
                </Heading>
                <Text>You have seen the whales, now experience the Elephant</Text>
            </Hero>
              <Heading as="h1" size="xl" mb="24px" color="secondary" >
                Time until farming ends
              </Heading>
            <Timer />
            <div>
                <Cards>
                    <FarmStakingCard />
                    <TwitterCard />
                </Cards>
                <CTACards>
                    <EarnAPRCard />
                    <EarnAssetCard />
                    <WinCard />
                </CTACards>
                <Cards>
                    <CakeStats />
                    <TotalValueLockedCard />
                    <MetaMask/>
                </Cards>
            </div>
        </Page>
    )
}

export default Home
