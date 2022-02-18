import Axios from 'axios';
import keytar from 'keytar';

export const logoutUser = () => {
    keytar.findCredentials("electron-openid-oauth").then(credentials => {
        console.log('the info: ', credentials);
        const token = credentials.password;

        Axios.post("https://www.deviantart.com/oauth2/revoke", { token: token }).then(response => {
            console.log('logged out', response);
        }).catch(err => {
            console.log('error logging out: ', err);
        })
    });

}