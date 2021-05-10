import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from '@pancakeswap-libs/uikit'
import Container from 'components/layout/Container'
import useI18n from 'hooks/useI18n'

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`

const Blurb = styled(Text)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`

const StyledHero = styled.div`
  padding-bottom: 24px;
  padding-top: 24px;
`
const Hero = () => {
  const TranslateString = useI18n()

  return (
    <StyledHero>
      <Container>
          <Title>Initial Dex Offering</Title>
          <Blurb>Invest in Innovative Projects</Blurb>
      </Container>
    </StyledHero>
  )
}

export default Hero
