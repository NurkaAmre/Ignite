//Base URL
const base_url = 'https://api.rawg.io/api/';
const key = '599e13bac2d94c318a24856b79bd3afa';
const key_url = `?&key=${key}`;
// const API_KEY_URL = `?&key=${API_KEY}`;

//Getting the month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}${key_url}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}${key_url}`;
export const newGamesURL = () => `${base_url}${new_games}${key_url}`;
//Game Details
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}${key_url}`;
//Game Screenshot
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots${key_url}`;
//Searched Game
export const searchedGameURL = (game_name) =>
  `${base_url}games?search=${game_name}${key_url}&page_size=9`;
