import express from 'express';
import { ApolloServer } from 'apollo-server-express';
 
import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';
 
 
const server = new ApolloServer({ typeDefs, resolvers, context: { models } });
const app = express();
app.use(cors());
 
server.applyMiddleware({ app });
 
models.sequelize.authenticate(); 
models.sequelize.sync();
 
app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
