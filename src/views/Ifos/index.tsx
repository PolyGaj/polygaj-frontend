import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import Container from 'components/layout/Container'
import IfoTabButtons from './components/IfoTabButtons'
import Hero from './components/Hero'
import CurrentIfo from './CurrentIfo'
import PastIfo from './PastIfo'
import ComingSoon from './ComingSoon'

const Ifos = () => {
  const { path } = useRouteMatch()

  return (
    <>
      <Hero />
      <Container>
        <IfoTabButtons />
        <CurrentIfo/>
      </Container>
    </>
  )
}

export default Ifos
