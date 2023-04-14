import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
import { Link } from 'react-router-dom';
import { smallImage } from '../util';

const Game = ({ name, released, image, rating, id }) => {
  const stringPathId = id.toString();
  const dispatch = useDispatch();
  const loadHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame layoutId={stringPathId} onClick={loadHandler}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>Rating: {rating}</p>
        <p>Released date: {released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;

export default Game;
