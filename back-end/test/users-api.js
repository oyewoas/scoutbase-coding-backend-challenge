import axios from 'axios';
import app from '../server';

app;

const port = process.env.PORT || 3000;

const API_URL = `http://localhost:${port}/graphql`;

export const login = async (variables) => axios.post(API_URL, {
  query: `
      mutation ($username: String!, $password: String!) {
        login(username: $username, password: $password) {
          token
          user {
            id
            name
          }
        }
      }
    `,
  variables,
});


export const createUser = async (variables) => axios.post(API_URL, {
  query: `
      mutation(
        $username: String!,
        $password: String!
      ) {
        createUser(
          username: $username,
          password: $password
        ) {
          token
          user {
            id
            name
          }
        }
      }
    `,
  variables,
});
