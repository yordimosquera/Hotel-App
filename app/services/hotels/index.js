import axios from 'axios';

export const getHotels = async () => {
  try {
    const {data} = await axios.get(
      `https://hotels-app-almundo.herokuapp.com/hotels`,
    );
    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      error,
      data: [],
    };
  }
};
