"use client"
import axios from 'axios';
import Cookies from 'js-cookie';
const api = axios.create({
  baseURL: "https://api.webcrawlerspider.com/v1/",
  // You can also set common headers here
});

export async function sendRecords(userData) {
    checkAndAddAuthTokenToHeader()
    try {
      const response = await api.post('/restricted/google_map_scrapper', userData);
      return response; // Assuming the API returns the user data and a token
    } catch (error) {
      throw error;
    }
}

export async function getMapData(recordId, cancelToken) {
    checkAndAddAuthTokenToHeader()
    try {
      const response = await api.post('/restricted/google_map_scrapper_fetch', recordId, cancelToken);
      return response; // Assuming the API returns the user data and a token
    } catch (error) {
      return error;
    }
}

// Function to set the authentication token in the Axios instance
export function setAuthToken(authToken) {
  // console.log("authToken", authToken)
  api.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  Cookies.set('authToken', authToken);
}

// Function to clear the authentication token from Axios and cookies
export function handleLogout() {
  delete api.defaults.headers.common['Authorization'];
  const authToken = Cookies.get('authToken');
  if (authToken) {
    Cookies.remove('authToken'); // Remove the token from cookies
  }
}

export const login = async (userData) => {
  try {
    const response = await api.post('/login', userData);
    return response.data.data; // Assuming the API returns the user data and a token
  } catch (error) {
    throw error;
  }
};


export const googleSignIn = async (token) => {
  try {
    const response = await api.post('/signuploginwithgoogle', token);
    return response.data.data; // Assuming the API returns the user data and a token
  } catch (error) {
    throw error;
  }
};

export const getDomainData = async (year, month) =>{
  checkAndAddAuthTokenToHeader()
  try {
    const response = await api.get(`/restricted/whois`);
    return response.data.data; // Assuming the API returns the user data and a token
  } catch (error) {
    throw error;
  }
}

export const checkWhoIs = async (year, month) =>{
  checkAndAddAuthTokenToHeader()
  try {
    const response = await api.get(`/restricted/whois/${year}/${month}`);
    return response.data.data; // Assuming the API returns the user data and a token
  } catch (error) {
    throw error;
  }
}
export const activateAccount = async (value) => {
  checkAndAddAuthTokenToHeader()
  try {
    const response = await api.get(`/restricted/purchasecodeactivation/${value}`);
    return response.data.data; // Assuming the API returns the user data and a token
  } catch (error) {
    throw error;
  }
};

export const generateLicence = async () => {
  checkAndAddAuthTokenToHeader()
  try {
    const response = await api.get(`/restricted/purchasecodecreate`);
    return response; // Assuming the API returns the user data and a token
  } catch (error) {
    throw error;
  }
};

export const resellerUsers = async () => {
  checkAndAddAuthTokenToHeader()
  try {
    const response = await api.get(`/restricted/getreseller_users`);
    return response; // Assuming the API returns the user data and a token
  } catch (error) {
    throw error;
  }
};

export const resellerLicences = async () => {
  checkAndAddAuthTokenToHeader()
  try {
    const response = await api.get(`/restricted/getreseller_purchasecode`);
    return response; // Assuming the API returns the user data and a token
  } catch (error) {
    throw error;
  }
};

export const forgetPhaseFirst = async (userData) => {
  try {
    const response = await api.post('/forget', userData);
    return response.data.data; // Assuming the API returns the user data and a token
  } catch (error) {
    throw error;
  }
};
export const forgetPhaseLast = async (userData) => {
  try {
    const response = await api.post('/change_pass', userData);
    return response.data.data; // Assuming the API returns the user data and a token
  } catch (error) {
    throw error;
  }
};
export const signUp = async (userData) => {
  try {
    const response = await api.post('/signup', userData);
    return response.data.data; // Assuming the API returns the user data and a token
  } catch (error) {
    throw error;
  }
};

// Function to get the authentication token from cookies
export function getAuthToken() {
  return Cookies.get('authToken');
}

// Function to check and add the authentication token to the Axios header if it's missing
export function checkAndAddAuthTokenToHeader() {

  const authToken = getAuthToken();
  if (authToken && !api.defaults.headers.common['Authorization']) {
    api.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  }
}
// Function to make an authenticated API request
export async function getAuthenticatedData(apiEndpoint) {

  try {
    const response = await api.get(apiEndpoint);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getUserData() {
  checkAndAddAuthTokenToHeader()
  try {
    const response = await api.get('/restricted/users?limit=500');
    return response; // It will provide every registered users data
  } catch (error) {
    throw error;
  }
}

export async function requestGoogleData(userData, cancelToken) {
  checkAndAddAuthTokenToHeader()
  try {
    const response = await api.post('/restricted/google_search_scrapper', userData, cancelToken);
    return response; // It will generate a unique query id for each request
  } catch (error) {
    throw error;
  }
}

export async function getGoogleData(userData, cancelToken) {
  checkAndAddAuthTokenToHeader()
  try {
    const response = await api.post('/restricted/google_search_scrapper_fetch', userData, cancelToken);
    return response; // It will server data of google search scraper
  } catch (error) {
    throw error;
  }
}

export async function getGoogleMapData(userData) {
  checkAndAddAuthTokenToHeader()
  try {
    const response = await api.post('/restricted/google_map_scrapper', userData);
    return response; // Assuming the API returns the user data and a token
  } catch (error) {
    throw error;
  }
}

export async function requestWebsiteData(requestData, cancelToken) {
  checkAndAddAuthTokenToHeader()
  try {
    const response = await api.post('/restricted/website_scrapper', requestData, cancelToken, { timeout: 7000 });
    return response.data.data; // Assuming the API returns the user data and a token
  } catch (error) {
    return error;
  }
}

export async function getWebsiteData(fetchId, cancelToken) {
  checkAndAddAuthTokenToHeader()
  try {
    const response = await api.post('/restricted/website_scrapper_fetch', fetchId, cancelToken, { timeout: 7000 });
    return response.data.data; // Assuming the API returns the user data and a token
  } catch (error) {
    return error;
  }
}

// abose words api
export async function findBadWords(text) {
  try {
    const findBadWords = await axios.post(`https://api.apilayer.com/bad_words?censor_character=*`, {text}, {
      headers: {
        apiKey : "OOVpx6dhQ8lmLcvIC6AWVwhRFTpanVW4"
      }
    });
    return findBadWords.data.bad_words_total;
  } catch (error) {
    console.log(error);
    return error;
  }
}
// abose words api

export async function fetchDirectoryScraper(url, cancelToken) {
  checkAndAddAuthTokenToHeader()
  try {
    const response = await api.post('/restricted/directory_scrapper', url, cancelToken, { timeout: 7000 });
    return response.data.data; // Assuming the API returns the user data and a token
  } catch (error) {
    return error;
  }
}

export async function getGoogleGlobalData() {
  checkAndAddAuthTokenToHeader()
  try {
    const response = await api.get('/restricted/google_search_global_data');
    return response.data.data; // Assuming the API returns the user data and a token
  } catch (error) {
    return error;
  }
}

export async function getMapGlobalData() {
  checkAndAddAuthTokenToHeader()
  try {
    const response = await api.get('/restricted/google_map_global_data');
    return response.data.data; // Assuming the API returns the user data and a token
  } catch (error) {
    return error;
  }
}

export async function websiteDataCenter(query, cancelToken) {
  checkAndAddAuthTokenToHeader()
  try {
    const response = await api.post('/restricted/Website_data_local_search', query, cancelToken);
    return response.data.data; // Assuming the API returns the user data and a token
  } catch (error) {
    return error;
  }
}
export async function verificationLink(email) {
  checkAndAddAuthTokenToHeader()
  try {
    const response = await api.post('/verification', {email});
    return response.data.data; // Assuming the API returns the user data and a token
  } catch (error) {
    return error;
  }
}