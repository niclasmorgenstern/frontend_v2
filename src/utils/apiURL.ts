const baseURL = 'http://127.0.0.1:8000';
const authBackend = 'dj-rest-auth';


export const apiURL = {
    auth: {        
        registration: `${baseURL}/${authBackend}/registration/`,
        login: `${baseURL}/${authBackend}/login/`,
        refresh: `${baseURL}/${authBackend}/token/verify/`,
        verify: `${baseURL}/${authBackend}/token/refresh/`,
        logout: `${baseURL}/${authBackend}/logout/`,
    },
}