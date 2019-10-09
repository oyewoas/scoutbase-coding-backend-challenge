import { ForbiddenError } from 'apollo-server-express';
import { skip } from 'graphql-resolvers';

const isAuthenticated = (parent, args, { currentUser }) => (currentUser ? skip : new ForbiddenError('Not authenticated as user.'));

export default isAuthenticated;