/* eslint-disable require-jsdoc */
import {
  UserInputError
} from 'apollo-server-express';

import { isUserLoggedIn, getMovieModel } from '../helpers/moviesController';



/**
 * @class MoviesController
 * @description Controllers for Movies
 * @exports MoviesController
 */
export default class MoviesController {
  
  /**
     * @method createUser
     * @description Method for user registration
     * @param {object} authenticatedUser - The Current User
     * @param {object} models - The Model     *
     * @returns {object} response body object
     */
  static async getMovies(authenticatedUser, models) {
    const isLoggedIn = isUserLoggedIn(authenticatedUser);
    const movies = await models.Movies.findAll();


    if (!movies) {
      throw new UserInputError(
        'No Movie was found',
      );
    }

    return movies && movies.length > 0
      ? movies.map((movie) => getMovieModel(movie, isLoggedIn))
      : [];
  }

  
}
