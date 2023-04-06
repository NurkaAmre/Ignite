//Base URL
const base_url = 'https://api.rawg.io/api';

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  console.log(month)
}
//Popular games
const popular_games = 'https://api.rawg.io/api/games?dates = 2020,0';

getCurrentMonth()