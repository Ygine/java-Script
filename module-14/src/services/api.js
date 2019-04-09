const URL = 'http://localhost:4000/notes';

export const getPost = async () => {
  try {
    const responce = await fetch(URL);
    const responceData = responce.json();
    return responceData;
  } catch (err) {
    throw err;
  }
};

export const savePost = async post => {
  const opt = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  };

  try {
    const responce = await fetch(URL, opt);
    const responceDate = responce.json();
    return responceDate;
  } catch (err) {
    throw err;
  }
};

export const deletePost = async id => {
  const opt = {
    method: 'DELETE',
  };

  try {
    const responce = await fetch(`${URL}/${id}`, opt);
    const responceData = responce.json();
    return responceData;
  } catch (err) {
    throw err;
  }
};

export const updatePost = async (id, updatePost) => {
  const opt = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatePost),
  };

  try {
    const responce = await fetch(`${URL}/${id}`, opt);
    const responceDate = responce.json();
    return responceDate;
  } catch (err) {
    throw err;
  }
};
