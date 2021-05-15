import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  position: relative;
  color: primary;
  font-size: 26px;
  border-radius: 4px;
  width: 100%;
  height: 70px;
  background: url('images/forest/king_button.gif');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  `

  const StyledSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const WoodButton = ({onBid, disabled, text}) => {
    const currentText = disabled ? 'Waiting...' : text
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const onClick= disabled ? () => {} : onBid
    return (
    <StyledDiv onClick={onClick}>
        <StyledSpan>{currentText}</StyledSpan>
    </StyledDiv>
  )
}

export default WoodButton
