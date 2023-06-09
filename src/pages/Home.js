import React, { useEffect } from 'react';
import GameDetail from '../components/GameDetail';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
import Game from '../components/Game';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { fadeIn } from '../animations';

const Home = () => {
  //Get the current location
  const location = useLocation();
  console.log(location.pathname);
  const pathId = location.pathname.split('/')[2];
  console.log(pathId);

  //Fetch the games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Get data back
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimatePresence type="crossfade">
        <AnimatePresence>
          {searched.length ? (
            <div className="searched">
              <h2>Searched Games</h2>
              <Games>
                {searched.map((game) => (
                  <Game
                    name={game.name}
                    released={game.released}
                    id={game.id}
                    rating={game.rating}
                    image={game.background_image}
                    key={game.id}
                  />
                ))}
              </Games>
            </div>
          ) : (
            ''
          )}
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {/* <GameDetail /> */}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              rating={game.rating}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              rating={game.rating}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              rating={game.rating}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </AnimatePresence>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
