import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL || import.meta.env.VITE_PORT,
	timeout: 10000,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
	},
});

axiosInstance.interceptors.request.use(
	(config) => {
		const token = Cookies.get("access_token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default axiosInstance;
