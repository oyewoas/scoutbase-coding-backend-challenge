import axios from 'axios';

const API_URL = 'http://localhost:4000/graphql';

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
