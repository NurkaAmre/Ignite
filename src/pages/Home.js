import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadGames } from '../actions/gamesAction';

const Home = () => {
  //Fetch the games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div>
      <h1>Okay Home show me your fingers</h1>
    </div>
  );
}

export default Home;