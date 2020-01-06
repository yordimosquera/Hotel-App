import axios from 'axios';

export const getHotels = async () => {
  try {
    const {data} = await axios.get(`http://192.168.0.3:3200/hotels`);
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
