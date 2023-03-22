export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_ERROR = 'AUTH_REQUEST_ERROR';

export const authRequest = () => ({
  type: AUTH_REQUEST,
});

export const authRequestSuccess = () => ({
  type: AUTH_REQUEST_SUCCESS,
});

export const authRequestError = () => ({
  type: AUTH_REQUEST_ERROR,
});
