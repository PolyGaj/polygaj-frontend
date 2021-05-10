import React from 'react'
import styled from 'styled-components'
import orderBy from 'lodash/orderBy'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon } from '@pancakeswap-libs/uikit'
import { NavLink } from 'react-router-dom'
import pools from 'config/constants/pools'
import { Pool } from 'state/types'

const StyledFarmStakingCard = styled(Card)`
  background: linear-gradient(#3B4155, #3A3045);
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }

  transition: opacity 200ms;
  &:hover {
    opacity: 0.65;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
`

// const activeNonCakePools = pools.filter((pool) => !pool.isFinished && !pool.earningToken.symbol.includes('CAKE'))
// const latestPools: Pool[] = orderBy(activeNonCakePools, ['sortOrder', 'pid'], ['desc', 'desc']).slice(0, 3)
// // Always include CAKE
// const assets = ['CAKE', ...latestPools.map((pool) => pool.earningToken.symbol)].join(', ')

const EarnAssetCard = () => {
  return (
    <StyledFarmStakingCard>
      <NavLink exact activeClassName="active" to="/pools" id="pool-cta">
        <CardBody>
          <Heading color="white" size="lg">
            Stake
          </Heading>
          <CardMidContent color="white">GAJ, WETH, WBTC</CardMidContent>
          <Flex justifyContent="space-between">
            <Heading color="white" size="lg">
              in Pools
            </Heading>
            <ArrowForwardIcon mt={30} color="white" />
          </Flex>
        </CardBody>
      </NavLink>
    </StyledFarmStakingCard>
  )
}

export default EarnAssetCard
