import { BASE_URL_DEV } from "../utils/globalVariables.js";

export const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL_DEV}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchCarsForUser = async (token) => {
  try {
    const response = await fetch(`${BASE_URL_DEV}/cars`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error('Fejl ved hentning af bildata');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const registerUser = async (name, email, password, phone) => {
  try{
    const response = await fetch(`${BASE_URL_DEV}/auth/register`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name : name,
        email: email,
        password: password,
        phone: phone,
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  }catch (error){
    throw new Error(error.message + "catch error fanget her...");
  }
}