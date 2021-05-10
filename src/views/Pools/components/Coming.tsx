import React from 'react'
import styled from 'styled-components'
import { Image, Button } from '@pancakeswap-libs/uikit'
import { CommunityTag } from 'components/Tags'
import useI18n from 'hooks/useI18n'
import CardTitle from './CardTitle'
import Card from'./Card'

const Balance = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 40px;
  font-weight: 600;
  padding: 10px 0;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
  margin-bottom: 16px;
`

const DetailPlaceholder = styled.div`
  display: flex;
  font-size: 14px;
  padding: 4px 0;
`
const Value = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
`

const Footer = styled.div`
  border-top: 1px solid ${({ theme }) => (theme.isDark ? '#524B63' : '#E9EAEB')};
  padding: 24px;
`
const Coming: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Card>
      <div style={{ padding: '24px' }}>
        <CardTitle>{TranslateString(414, 'Your GAJ Project')}</CardTitle>
        <Image src="/images/applynow.png" width={64} height={64} alt="Your project" />
        <Balance>???</Balance>
        <Label>{TranslateString(416, 'Create a pool for your token')}</Label>
        <Button variant="secondary" as="a" href="https://t.me/polygajhead" external fullWidth mb="16px">
          {TranslateString(418, 'Apply Now')}
        </Button>
        <DetailPlaceholder>
          <div style={{ flex: 1 }}>{TranslateString(736, 'APR')}:</div>
          <Value>???</Value>
        </DetailPlaceholder>
        <DetailPlaceholder>
          <div style={{ flex: 1 }}>
            <span role="img" aria-label="polygaj">
             {' '}
            </span>
            {TranslateString(384, 'Your Stake')}:
          </div>
          <Value>???</Value>
        </DetailPlaceholder>
      </div>
      <Footer>
        <CommunityTag />
      </Footer>
    </Card>
  )
}

export default Coming
