import React, { useState } from 'react';
import Card from './Card.jsx';
import styled from 'styled-components';

const Heading = styled.h2`
  text-align: center;
  margin: 20px auto;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 90%;
  max-width: 1100px;
  margin: 10px auto;
`
const BuyPets = ({orderPet}) => {

  const [pets] = useState(["bear", "black-cat", "bunny", "chick", "dog", "frog", "giraffe", "hedgehog", "hippo", "horse", "koala", "lion", "monkey", "owl", "penguin", "pig", "sheep", "tiger", "turtle", "white-cat"]);

  return (
    <section>
      <Heading>Pets for Sale</Heading>
      <CardContainer>
        {pets.map((pet) => (
          <Card pet={pet} orderPet={orderPet} key={Math.random()}/>
        ))}
      </CardContainer>
    </section> 
  )
};

export default BuyPets;