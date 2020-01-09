import axios from 'axios';
const url = 'https://hotels-app-almundo.herokuapp.com';
export const getHotels = async () => {
  try {
    const {data} = await axios.get(`${url}/hotels`);
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

export const searchHotelsByText = (word, hotels) => {
  try {
    const wordToSearch = word.toLowerCase();
    const hotelsFinded = hotels.filter(
      hotel => hotel.name.toLowerCase().indexOf(wordToSearch) >= 0,
    );
    return {
      data: {items: hotelsFinded},
      error: false,
    };
  } catch (error) {
    return {
      error,
      data: [],
    };
  }
};
