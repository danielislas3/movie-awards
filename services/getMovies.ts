const baseURL = "http://localhost:8080";

export const getAllMovies = async () => {
  const response = fetch(baseURL + "/api/movies");
  return response;
};
