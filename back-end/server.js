import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import DataLoader from 'dataloader';
import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';
import TokenVerify from './middlewares/authorization';

const port = process.env.PORT || 3000;

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs,
  resolvers,
  formatError: (error) => {
    // remove the internal sequelize error message
    // leave only the important validation error
    const message = error.message
      .replace('SequelizeValidationError: ', '')
      .replace('Validation error: ', '');
  
    return {
      ...error,
      message,
    };
  },
  context: async ({ req, connection }) => {
    if (connection) {
      return {
        models,
        loaders: {
          user: new DataLoader((keys) => loaders.user.batchUsers(keys, models),),
        },
      };
    }
  
    if (req) {
      const currentUser = await TokenVerify(req);
      return {
        models,
        currentUser,
        secret: process.env.SECRET,
        loaders: {
          user: new DataLoader((keys) => loaders.user.batchUsers(keys, models),),
        },
      };
    }
  },
});
const app = express();

app.use(cors());

// Normal express config defaults
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

server.applyMiddleware({ app });
 
models.sequelize.authenticate();
models.sequelize.sync();
 
app.listen({ port }, () => console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`));
