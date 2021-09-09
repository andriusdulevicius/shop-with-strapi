import axios from 'axios';

export const postData = async (dataToSend, urlEnd) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_STRAPI_URL}/${urlEnd}`, {
      identifier: dataToSend.email,
      password: dataToSend.password,
    });
    console.log(response.data);
    return response;
  } catch (error) {
    console.warn(error);
  }
};
