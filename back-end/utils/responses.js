/* eslint-disable camelcase */
const messages = {
  signUp: {
    success: 'User Created Successfully',
    error: 'Could not sign up user try again',
    conflict: 'User with that username already exist'
  },
  signIn: {
    success: 'Successfully Signed In',
    notfound: 'User Cannot be found',
    error: 'Could not sign in user try again',
    invalid: 'Invalid Credentials',
    unverified: 'Email not verified, check your mail to verify'
  }
};

const status = {
  success: 200,
  error: 500,
  notfound: 404,
  unauthorized: 401,
  conflict: 409,
  created: 201,
  bad: 400,
  nocontent: 204,
  unprocessable: 422,
};

const forgeResponse = (statusCode, message, data = null, token = null) => {
  const response = {
    status: statusCode,
    message
  };

  if (data) response.data = data;
  if (data && token) response.data.token = token;

  return response;
};

const successResponse = (statusCode,
  message, userData, token) => forgeResponse(statusCode, message, userData, token);

const errorResponse = (statusCode, message) => forgeResponse(statusCode, message);

const conflictResponse = (statusCode, message) => forgeResponse(statusCode, message);

export {
  status,
  successResponse,
  errorResponse,
  messages,
  conflictResponse,
};
