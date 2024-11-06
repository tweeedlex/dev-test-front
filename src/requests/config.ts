import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";

const api = axios.create({
	baseURL: "https://dummyjson.com",
});

type ApiRequestOptions = AxiosRequestConfig;
type ApiResponse<T> = {
	data: T;
	error?: unknown;
	status?: number;
};

const apiRequest = async <T>(
	method: Method,
	route: string,
	options: ApiRequestOptions = {},
	body: object | null = null
): Promise<ApiResponse<T>> => {
	try {
		const config: ApiRequestOptions = { ...options };
		if (body) {
			config.data = body;
		}

		const response: AxiosResponse<T> = await api.request({
			method,
			url: route,
			...config,
		});

		return { data: response.data };
	} catch (e: unknown) {
		const errorResponse = e as { response?: AxiosResponse<T> };
		return {
			data: (errorResponse.response?.data ?? {}) as T,
			error: e,
			status: errorResponse.response?.status,
		};
	}
};

export default apiRequest;
