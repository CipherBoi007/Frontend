import axios from 'axios';

let accessToken = localStorage.getItem('adminToken') || null;

export const setAccessToken = (token) => {
    accessToken = token;
    localStorage.setItem('adminToken', token);
};

export const getAccessToken = () => {
    return accessToken;
};

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
    withCredentials: true // Important for sending/receiving HttpOnly cookies
});

// Request interceptor to attach access token
instance.interceptors.request.use(
    (config) => {
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle 401s and refresh token
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // Attempt to refresh the token using the HttpOnly cookie
                const response = await axios.post(
                    `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/auth/refresh`,
                    {},
                    { withCredentials: true }
                );

                if (response.data.accessToken) {
                    setAccessToken(response.data.accessToken);
                    originalRequest.headers['Authorization'] = `Bearer ${response.data.accessToken}`;
                    return instance(originalRequest);
                }
            } catch (refreshError) {
                // If refresh fails, we must log them out
                console.error('Refresh token failed:', refreshError);
                window.location.href = '/login';
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default instance;
