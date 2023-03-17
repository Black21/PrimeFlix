//auth: 317e4ce76c5e9dbdd69d1b71b6250a42
//https://api.themoviedb.org/3/movie/550?api_key=317e4ce76c5e9dbdd69d1b71b6250a42
//URL DA API: /movie/550?api_key=317e4ce76c5e9dbdd69d1b71b6250a42

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
