import axios from 'axios';

export const postData = async (dataToSend, urlEnd) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_STRAPI_URL}/${urlEnd}`, {
      identifier: dataToSend.email,
      password: dataToSend.password,
    });

    return response.data;
  } catch (error) {
    console.warn(error);
  }
};

export const postNewData = async (dataToSend, urlEnd) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_STRAPI_URL}/${urlEnd}`, {
      username: dataToSend.username,
      email: dataToSend.email,
      password: dataToSend.password,
    });

    return response.data;
  } catch (error) {
    console.warn(error);
  }
};
