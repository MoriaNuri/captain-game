import axios from "axios";
import Config from "../config";

const AuthService = {
    login: async function(user) {
        return axios.post(`${Config.serverAdress}/user/login`, user).then(value => {
            return value;
        })
        .catch(err => {
            throw(err);
        });
    },

    register: async function(user) {
        return axios.post(`${Config.serverAdress}/user/register`, user).then(value => {
            return value;
        })
        .catch(err => {
            throw(err);
        });
    }
}

export default AuthService;