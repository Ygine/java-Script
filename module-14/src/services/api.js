const URL = 'http://localhost:4000/notes';
import axios from 'axios';

export const getPost = async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const savePost = async post => {
  try {
    const response = await axios.post(URL, post);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const deletePost = async id => {
  try {
    const response = await axios.delete(`${URL}/${id}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const updatePost = async (id, updatePost) => {
  try {
    const response = await axios.patch(`${URL}/${id}`, updatePost);
    return response.data;
  } catch (err) {
    throw err;
  }
};
