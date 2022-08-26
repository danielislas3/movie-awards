const baseURL = "http://localhost:8080";

export const movieService = {
  getAllMovies: async () => {
    const response = await fetch(baseURL + "/api/movies");
    let data = await response.json();
    return data;
  },
};
