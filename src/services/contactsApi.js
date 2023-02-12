import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function fetchAllContacts() {
  const data = await axios.get('/contacts');
  return data;
}

export async function postContact(newContact) {
  const response = await axios.post('/contacts', newContact);

  return response;
}

export async function deleteContactById(id) {
  await axios.delete(`/contacts/${id}`);
}
