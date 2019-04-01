const URL = 'http://localhost:4000/notes';

export const getPost = () => {
  return fetch(URL).then(response => {
    if (response.ok) return response.json();

    throw new Error('some wron' + response.statusText);
  });
};

export const savePost = post => {
  const opt = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  };

  return fetch(URL, opt).then(response => {
    if (response.ok) return response.json();

    throw new Error('some wron' + response.statusText);
  });
};

export const deletePost = id => {
  const opt = {
    method: 'DELETE',
  };

  return fetch(`${URL}/${id}`, opt).then(response => {
    if (response.ok) return response.json();

    throw new Error('i cant delete ' + response.statusText);
  });
};

export const updatePost = (id, updatePost) => {
  const opt = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatePost),
  };

  return fetch(`${URL}/${id}`, opt).then(response => {
    if (response.ok) return response.json();

    throw new Error('i cant delete ' + response.statusText);
  });
};
