import React from 'react'
import styled from 'styled-components'
import { Text, Heading, BaseLayout, Button, LinkExternal, Flex, Image } from '@pancakeswap-libs/uikit'
import { ifosConfig } from 'config/constants'
import useI18n from 'hooks/useI18n'
import Title from './components/Title'

const LaunchIfoCallout = styled(BaseLayout)`
  border-top: 2px solid ${({ theme }) => theme.colors.textSubtle};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: 0 auto;
  padding: 32px 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: 1fr 1fr;
  }
`

const List = styled.ul`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;

  & > li {
    line-height: 1.4;
    margin-bottom: 8px;
  }
`

const Cards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 20px;
  margin-top: 30px;

  & > div {
    grid-column: span 7;
  }

  ${({ theme }) => theme.mediaQueries.xs} {
    & > div {
      grid-column: span 12;
    }
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 12;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 7;
    }
  }
`

const FullColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  
  grid-column: span 12 !important;

  ${({ theme }) => theme.mediaQueries.xs} {
    grid-column: span 12 !important;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-column: span 12 !important;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-column: span 12 !important;
  }
`

/**
 * Note: currently there should be only 1 active IFO at a time
 */
const activeIfo = ifosConfig.find((ifo) => ifo.isActive)

const Ifo = () => {
  const TranslateString = useI18n()

  return (
    <div>
      <Cards>
        <FullColumnWrapper>
          <Text color="secondary">Disclaimer: Crypto / Defi markets and projects are considered high risk investments. Always do your own research (DYOR) into any project that you invest. You are responsible for your own investing strategy, and should manage your own risk. Only Invest what you can afford to lose!
          </Text>
        </FullColumnWrapper>
      </Cards>
      <LaunchIfoCallout>
        <div>
          <Title as="h2">{TranslateString(592, 'How to take part')}</Title>
          <Heading mb="16px">{TranslateString(594, 'Before Sale')}:</Heading>
          <List>
            <li>Buy MATIC</li>
            <li>Wait for the Sale to start</li>
          </List>
          <Flex mb="16px">
            <LinkExternal href="https://polygaj.finance/buy" mr="16px">
              Buy MATIC
            </LinkExternal>
          </Flex>
          <Heading mb="16px">{TranslateString(600, 'During Sale')}:</Heading>
          <List>
            <li>While the sale is live, commit your MATIC tokens to buy the tokens</li>
          </List>
          <Heading mb="16px">{TranslateString(604, 'After Sale')}:</Heading>
          <List>
            <li>Claim the tokens you bought, along with any unspent funds.</li>
            <li>{TranslateString(608, 'Done!')}</li>
          </List>
        </div>
        <div>
          <div>
            <Title as="h2">Want to launch your own IDO?</Title>
            <Text mb={3}>
              Launch your project with PolyGaj, Polygon Network’s most transparent and active DeFi Platform
            </Text>
            <Button
              as="a"
              href="https://t.me/polygajhead"
              external
            >
              Contact Us
            </Button>
          </div>
        </div>
      </LaunchIfoCallout>
    </div>
  )
}

export default Ifo
