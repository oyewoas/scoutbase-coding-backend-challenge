import { AuthenticationError, UserInputError } from 'apollo-server-express';
import {
  hashPassword,
  generateToken,
  Jwt,
  bcrypt,
} from '../utils';

/**
 * @class UsersController
 * @description Controllers for Users
 * @exports UsersController
 */
export default class UsersController {
  /**
     * @method createUser
     * @description Method for user registration
     * @param {object} username - The username
     * @param {object} password - The password
     * @param {object} models - The Model
     * @returns {object} response body object
     */
  static async createUser(username, password, models) {
    const userExists = await models.Users.findOne({
      where: {
        name: username
      }
    });
    if (userExists) {
      throw new UserInputError(
        'Username already exists, choose another username',
      );
    }
    const hashedPassword = await hashPassword(password);
    const user = await models.Users.create({
      name: username,
      password: hashedPassword
    });
    const {
      id, name
    } = user;
    const token = await generateToken({
      id
    });
    const response = {
      token,
      user: {
        id,
        name
      }
    };
    return response;
  }

  /**
     * @method login
     * @description Method for user registration
     * @param {object} username - The username
     * @param {object} password - The password
     * @param {object} models - The Model
     * @returns {object} response body object
     */
  static async login(username, password, models) {
    const user = await models.Users.findOne({
      where: {
        name: username
      }
    });
    if (!user) {
      throw new UserInputError(
        'No user found with this login credentials.',
      );
    }
    const {
      id, name
    } = user;
    const isPasswordValid = await bcrypt.comparePassword(user.password, password);

    if (!isPasswordValid) {
      throw new AuthenticationError('Invalid password.');
    }

    const token = await Jwt.generateToken({
      id
    });
    const response = {
      token,
      user: {
        id,
        name
      }
    };
    return response;
  }
}
