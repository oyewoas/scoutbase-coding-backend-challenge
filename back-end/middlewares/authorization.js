import { AuthenticationError } from 'apollo-server-express';
import { verifyToken } from '../utils';


/**
   * Verify if token is valid
   * @param  {object} req - The context request object
   * @returns {String} req.userId - The user id
   */
const TokenVerify = async (req) => {
  const { headers: { token } } = req;
  if (token) {
    try {
      const currentUser = await verifyToken(token);
      return currentUser;
    } catch (error) {
      throw new AuthenticationError(
        'Your session expired. Sign in again.',
      );
    }
  }
};

export default TokenVerify;
