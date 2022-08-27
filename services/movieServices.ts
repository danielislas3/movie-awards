export const movieService = {
  getAllMovies: async () => {
    const response = await fetch("/api/movies");
    return await response.json();
  },
};
