import { Database } from '@vuex-orm/core';

export const AxiosRequestConfig = {
  /**
   * Default Base URL
   */
  baseURL: 'http://localhost:3000',

  /**
   * Default URL
   */
  url: '/',

  /**
   * Default Method
   */
  method: 'get',

  /**
   * Access Token Variable
   */
  access_token: '',

  /**
   * Default Headers
   */
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },

  /**
   * Default Data
   */
  data: {},

  /**
   * Default Timout
   */
  timeout: 0,

  /**
   * Default With Credentials Flag
   */
  withCredentials: false,

  /**
   * Default Response Type
   */
  responseType: 'json',

  /**
   * Default Response Encoding
   */
  responseEncoding: 'utf8',

  /**
   * Default Validate Status Method
   * @param {number} status
   */
  validateStatus(status) {
    return status >= 200 && status < 300; // default
  },

  /**
   * Default Max Redirects
   */
  maxRedirects: 5,

  /**
   * Default Socket Path
   */
  socketPath: null,

  /**
   * Default Proxy
   */
  proxy: {},

  /**
   * Default on Response interceptor
   * @param {object} response
   */
  onResponse(response) {
    return response.data;
  },

  /**
   * Default on Request interceptor
   * @param {object} config
   */
  onRequest(config) {
    return config;
  },

  /**
   * On 401 Unauthorised
   * @param {object} error
   */
  onUnauthorised(error) {
    //
  },

  /**
   * On 404 Not Found
   * @param {object} error
   */
  onNotFound(error) {
    //
  },

  /**
   * On 500 Server Error
   * @param {object} error
   */
  onServerError(error) {
    //
  },

  /**
   * On Generic Error
   * @param {object} error
   */
  onGenericError(error) {
    //
  },

  /**
   * On Laravel Validation Error (Or 422 Error).
   * @param {object} error
   */
  onValidationError(error) {
    //
  },

  /**
   * Default on Error
   * @param {object} error
   */
  onError(error) {
    switch (error.response.status) {
      case 401:
        this.onUnauthorised(error);
        break;
      case 404:
        this.onNotFound(error);
        break;
      case 422:
        this.onValidationError(error);
        break;
      case 500:
        this.onServerError(error);
        break;
      default:
        this.onGenericError(error);
        break;
    }

    return Promise.reject(error);
  },
};

export const VuexOrmPluginConfig = {
  /**
   * Default VuexORM Database
   */
  database: new Database(),

  /**
   * Default Axios Config
   */
  http: AxiosRequestConfig
};

export const ModuleConfig = {
  /**
   * Vuex Default Getters
   */
  getters: {
    loading: state => state.loading,
    errors: state => state.errors,
  },

  /**
   * Vuex Default Mutations
   */
  mutations: {
    /**
     * On Default Request
     * @param {object} state
     */
    onRequest(state) {
      state.loading = true;
      state.errors = [];
    },

    /**
     * On Error Request
     * @param {object} state
     * @param {object} response
     */
    onError(state, response) {
      state.loading = false;
      state.errors = response.data;
    },

    /**
     * On Success Request
     * @param {object} state
     * @param {object} response
     */
    onSuccess(state) {
      state.loading = false;
      state.errors = [];
    },
  },

  /**
   * Vuex Defualt State
   */
  state: {
    loading: false,
    errors: [],
  },
};

export const FetchConfig = {
  name: 'fetch',
  http: {
    url: '',
    method: 'get',
  },
};

export const GetConfig = {
  name: 'get',
  http: {
    url: '/:id',
    method: 'get',
  },
};

export const CreateConfig = {
  name: 'create',
  alias: ['insert'],
  http: {
    url: '',
    method: 'post',
  },
};

export const UpdateConfig = {
  name: 'update',
  http: {
    url: '/:id',
    method: 'put',
  },
};

export const DeleteConfig = {
  name: 'delete',
  http: {
    url: '/:id',
    method: 'delete',
  },
};

export const ModelConfig = {
  http: AxiosRequestConfig,
  methods: {
    $fetch: FetchConfig,
    $get: GetConfig,
    $create: CreateConfig,
    $update: UpdateConfig,
    $delete: DeleteConfig,
  },
};
