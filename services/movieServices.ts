export const movieService = {
  getAllMovies: async () => {
    try {
      const response = await fetch("/api/movies");
      return await response.json();
    } catch (err) {
      return { msg: err, movies: [] };
    }
  },
};
