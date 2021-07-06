import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios'



export abstract class HttpClient {
    protected readonly instance: AxiosInstance;

    constructor(axiosOptions: AxiosRequestConfig) {
        this.instance = axios.create(axiosOptions)
        this.initRespInterceptor()
    }

    private readonly initRespInterceptor = () => {
        this.instance.interceptors.response.use(this.handelResp, this.handleError)
    }
    protected handelResp({ data }: AxiosResponse) {
        return data;
    }
    protected handleError(error: unknown) {
        return Promise.reject(error)
    }
}