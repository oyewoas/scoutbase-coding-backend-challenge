
import { UsersController } from '../controllers';
import MoviesController from '../controllers/movies';

const { createUser, login } = UsersController;
const { getMovies } = MoviesController;

const resolvers = {
  Query: {
    movies: async (root, args, { models, currentUser }) => {
      const movies = await getMovies(currentUser, models);
      return movies;
    },
  },
  Mutation: {
    createUser: async (root, { username, password }, { models }) => {
      const userData = await createUser(username, password, models);
      return userData;
    },
    login: async (root, { username, password }, { models }) => {
      const userData = await login(username, password, models);
      return userData;
    },
  },
};

export default resolvers;
