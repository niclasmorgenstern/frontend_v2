import axios from "axios";
import { apiURL } from '../apiURL';

const setAccessToken = (accessToken: string) => {
    localStorage.setItem("accessToken", accessToken)
};

const getAccessToken = (): string | null => {
    const accessToken = localStorage.getItem("accessToken")
    return accessToken
};

const setRefreshToken = (refreshToken: string): void => {
    localStorage.setItem("refreshToken", refreshToken)
};

const getRefreshToken = (): string | null => {
    const refreshToken = localStorage.getItem("refreshToken")
    return refreshToken
};

const deleteToken = (): void => {    
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
};

const blacklistToken = (refreshToken: string): void => {
    axios.post(apiURL.auth.blacklist, { 
        "refresh": refreshToken
    })
};

const TokenService = {
    setAccessToken,
    getAccessToken,
    setRefreshToken,
    getRefreshToken,
    deleteToken,
    blacklistToken,
}

export default TokenService;