const BASE_URL = 'https://62d459315112e98e484e5213.mockapi.io';

// GET -> /contacts
export const getContacts = async () => {
  const url = `${BASE_URL}/contacts`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.status);
  }

  return await response.json();
};

// GET -> /contacts/:id
export const getContactById = async id => {
  const url = `${BASE_URL}/contacts/${id}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

// POST -> /contacts
export const postContact = async contact => {
  const options = {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  const url = `${BASE_URL}/contacts`;

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

// PUT -> /contacts/:id
export const updateContact = async newContact => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(newContact),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  const url = `${BASE_URL}/contacts/${newContact.id}`;

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

// PATCH -> /contacts/:id
// export const updateContactPATCH = newContact => {

// };

// DELETE -> /contacts/:id
export const deleteContact = async id => {
  const options = {
    method: 'DELETE',
  };
  const url = `${BASE_URL}/contacts/${id}`;

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(response.status);
  }

  return response.json();
};
