const jwtDecode = require("jwt-decode");
const axios = require("axios");
const url = require("url");
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
  console.log('refreshing...', accessToken, refreshToken)
  const refreshToken = await keytar.getPassword(keytarService, keytarAccount);
  

  if (refreshToken) {
    console.log('YOU have a token!  Cool!')
    // const refreshOptions = {
    //   method: "POST",
    //   url: `https://${auth0Domain}/token`,
    //   headers: { "content-type": "application/json" },
    //   data: {
    //     grant_type: "refresh_token",
    //     client_id: clientId,
    //     refresh_token: refreshToken,
    //   },
    // };

    try {
      const response = await axios.post(`https://${auth0Domain}/token`, getRefreshDataString());
      console.log('Making a thing!')

      accessToken = response.data.access_token;
      profile = jwtDecode(response.data.id_token);
    } catch (error) {
      await logout();

      throw error;
    }
  } else {
    console.log('OOPS! in refreshTokens')
    console.log('No refresh tokens!')
    throw new Error("No available refresh token.");
  }
}

async function loadTokens(callbackURL, urlCode) {
  code = urlCode;
  const urlParts = url.parse(callbackURL, true);
  const query = urlParts.query;

  console.log('uh, are you actually doing this??', query)

  const exchangeOptions = {
    grant_type: "authorization_code",
    client_id: clientId,
    client_secret: clientSecret,
    code: urlCode,
    redirect_uri: redirectUri
  };
  console.log('like really??', exchangeOptions)

  const options = {
    method: "POST",
    url: `https://${auth0Domain}/token`,
    headers: {
      "content-type": "application/json",
    },
    data: JSON.stringify(exchangeOptions),
  };


  try {
    const response = await axios.post(`https://${auth0Domain}/token`, getAuthDataString());

    console.log('TOKEN INFO: ', response)

    accessToken = response.data.access_token;
    // profile = jwtDecode(response.data.id_token);
    refreshToken = response.data.refresh_token;

    if (refreshToken) {
      await keytar.setPassword(keytarService, keytarAccount, refreshToken);
    }
    console.log('doing loadToken')
  } catch (error) {
    console.log('OOPS! in loadTokens', error)
    // await logout();

    throw error;
  }
}

async function logout() {
  //revoke first, then delete
  console.log('launching...', accessToken, refreshToken)
  const revokeOptions = {
    method: "POST",
    url: `https://${auth0Domain}/revoke`,
    headers: { "content-type": "application/json" },
    data: {
      token: accessToken,
    },
  };

  try {
    console.log("trying to logout...")
    const response = await axios.post(`https://${auth0Domain}/revoke`, `token=${accessToken}`);

    await keytar.deletePassword(keytarService, keytarAccount);
    // accessToken = null;
    // profile = null;
    // refreshToken = null;
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