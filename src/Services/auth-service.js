const jwtDecode = require("jwt-decode");
const axios = require("axios");
const envVariables = require('../../env-variables.json');
const keytar = require("keytar");
const os = require("os");

const { clientSecret, auth0Domain, clientId } = envVariables;

const redirectUri = "http://localhost:3000";

const keytarService = "electron-openid-oauth";
const keytarAccount = os.userInfo().username;

let accessToken = null;
let profile = null;
let refreshToken = null;
let code = null;

function getAccessToken() {
  return accessToken;
}

function getProfile() {
  return profile;
}

function getAuthenticationURL() {
  return (
    "https://" +
    auth0Domain +
    "/authorize?" +
    "scope=basic user user.manage message browse comment.post note&" +
    "response_type=code&" +
    "client_id=" +
    clientId +
    "&" +
    "redirect_uri=" +
    redirectUri
  );
}

function getAuthDataString() {
  return `grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&code=${code}&redirect_uri=${redirectUri}`;
}

function getRefreshDataString() {
  return `grant_type=refresh_token&client_id=${clientId}&refresh_token=${refreshToken}`;
}

async function refreshTokens() {
  const refreshToken = await keytar.getPassword(keytarService, keytarAccount);
  

  if (refreshToken) {
    try {
      const response = await axios.post(`https://${auth0Domain}/token`, getRefreshDataString());

      accessToken = response.data.access_token;
      profile = jwtDecode(response.data.id_token);
    } catch (error) {

      throw error;
    }
  } else {
    console.log('OOPS! in refreshTokens')
    throw new Error("No available refresh token.");
  }
}

async function loadTokens(callbackURL, urlCode) {
  code = urlCode;

  try {
    const response = await axios.post(`https://${auth0Domain}/token`, getAuthDataString());

    accessToken = response.data.access_token;
    refreshToken = response.data.refresh_token;

    if (refreshToken) {
      await keytar.setPassword(keytarService, keytarAccount, refreshToken);
    }
  } catch (error) {
    console.log('OOPS! in loadTokens', error);

    throw error;
  }
}

async function logout() {
  //revoke first, then delete

  try {
    console.log("trying to logout...")
    const response = await axios.post(`https://${auth0Domain}/revoke`, `token=${accessToken}`);

    await keytar.deletePassword(keytarService, keytarAccount);
    accessToken = null;
    profile = null;
    refreshToken = null;
  } catch (error) {

    throw error;
  } 

}

function getLogOutUrl() {
  return `https://${auth0Domain}/revoke`;
}

module.exports = {
  getAccessToken,
  getAuthenticationURL,
  getLogOutUrl,
  getProfile,
  loadTokens,
  logout,
  refreshTokens,
};