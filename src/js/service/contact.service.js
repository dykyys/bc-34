const BASE_URL = 'https://62d459315112e98e484e5213.mockapi.io';

// GET -> /contacts
export const getContacts = () => {
  const url = `${BASE_URL}/contacts`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

// GET -> /contacts/:id
export const getContactById = id => {
  const url = `${BASE_URL}/contacts/${id}`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

// POST -> /contacts
export const postContact = contact => {
  const options = {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  const url = `${BASE_URL}/contacts`;
  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

// PUT -> /contacts/:id
export const updateContact = newContact => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(newContact),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  const url = `${BASE_URL}/contacts/${newContact.id}`;
  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

// PATCH -> /contacts/:id
// export const updateContactPATCH = newContact => {

// };

// DELETE -> /contacts/:id
export const deleteContact = id => {
  const options = {
    method: 'DELETE',
  };
  const url = `${BASE_URL}/contacts/${id}`;
  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
