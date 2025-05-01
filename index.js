import { API_URL } from "../constants";

export const getMoviesBySearch = async (searchQuery = "american") => {
  const apiPath = `${API_URL}&s=${searchQuery}`;

  try {
    const response = await fetch(apiPath);
    if (!response.ok) {
      console.Error(response.status);
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
};

export const getMovieById = async (movieId) => {
  const apiPath = `${API_URL}&i=${movieId}`;

  try {
    const response = await fetch(apiPath);
    if (!response.ok) {
      console.error(response.status);
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
};
