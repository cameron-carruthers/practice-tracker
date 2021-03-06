import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import Title from './Title.tsx';
// @ts-ignore
import Subtitle from './Subtitle.tsx';
// @ts-ignore
import { TertiaryButton } from './Buttons.ts';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 767px) {
    display: none;
  }
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem;
`

const MobilePet = styled.img`
  width: 40%;
`

const ButtonContainer = styled.div`
  @media (max-width: 300px) {
    display: none;
  }
`

interface MobileHeroProps {
  toggleModal: (form: string) => void;
  returnHome: () => void;
}

const MobileHero = ({returnHome, toggleModal}: MobileHeroProps) => (
  <Container>
    <i tabIndex={0} style={{alignSelf: "flex-start"}} className="fas fa-home fa-2x" onClick={returnHome}></i>
    <Title />
    <FlexContainer>
      <Subtitle />
      <MobilePet src={require('../assets/pets/white-cat.png').default} alt="white-cat"/>
    </FlexContainer>
    <ButtonContainer>
      <TertiaryButton modifiers="small" onClick={toggleModal}>Submit Practice</TertiaryButton>
    </ButtonContainer>
  </Container>
);

export default MobileHero;