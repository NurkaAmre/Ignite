import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';

const Game = ({ name, released, image, rating, id }) => {
  const dispatch = useDispatch();
  const loadHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame onClick={loadHandler}>
      <h3>{name}</h3>
      <p>Rating: {rating}</p>
      <p>Released date: {released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;

export default Game;
