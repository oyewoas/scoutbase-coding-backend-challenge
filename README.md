[![Build Status](https://travis-ci.com/oyewoas/scoutbase-coding-backend-challenge.svg?token=UhTLyPmC4FJFTsy9LJJ1&branch=develop)](https://travis-ci.com/oyewoas/scoutbase-coding-backend-challenge)
[![Maintainability](https://api.codeclimate.com/v1/badges/eec3cfdc2df501237031/maintainability)](https://codeclimate.com/github/oyewoas/scoutbase-coding-backend-challenge/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/eec3cfdc2df501237031/test_coverage)](https://codeclimate.com/github/oyewoas/scoutbase-coding-backend-challenge/test_coverage)
## Table of Contents (Optional)

- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [Prerequisites](#prerequisites)
- [Settings](#settings)


## Usage

### Developers
- For developers seeking to use it as a backend infrastructure use this url https://movies-graphql-api.herokuapp.com/graphql and then follow the description in [Usage](#usage) below to get started on how to implement the api endpoints in your app.    

## Features
   Access the Base URL above

- Use the following Mutations

  ```javascript
    mutation {
        login(username: "name", password: "password") {
          token
          user {
            id
            name
          }
        }
    }
  ```


  ```javascript
  mutation {
    createUser(username: "yourname", password: "yourpassword") {
          token
          user {
            id
            name
          }
        }
    }
  ```


- Use the following Query

  Public query:
  ```javascript
    query{
        movies{
          title
          year
          rating
          actors {
            name
            birthday
            country
            directors {
              name
              birthday
              country
            }
          }
        }
      }
  ```

  Authenticated User:

  HTTP HEADERS = { token : '' }
  token is received upon logging in

  ```javascript
    query{
        movies{
          scoutbase_rating
          title
          year
          rating
          actors {
            name
            birthday
            country
            directors {
              name
              birthday
              country
            }
          }
        }
      }
  ```

## Contributing
    I would love to hear from anyone that will like to contribute

## Prerequisites
- NodeJs and Npm (https://nodejs.org/en/download/)

- PostgreSQL(https://www.postgresql.org/download/)

- Create a .env file at the project root `scoutbase-coding-backend-challenge/.env` see `.env-example` file to know what to add to `.env` in your root folder.

- DBeaver: DBeaver is free and open source universal database tool for developers and database administrators.
  (https://dbeaver.io/download/), this is optional though, you can use any other GUI for postgreSQL.

## Settings

  To run locally, clone repository `https://github.com/oyewoas/scoutbase-coding-backend-challenge.git`, cd into `scoutbase-coding-backend-challenge`

  Install dependencies

   ```shell
   $ npm install
   ```
  After Setting up the database, navigate into `scoutbase-coding-backend-challenge/back-end` then Start server by running:

   ```shell
   $ npm run dev
   ```
  Seed Database tables with movies, directors, actors and some users by running the command below

   ```shell
   $ npm run seed
   ```

   Test by running:
   ```shell
   $ npm run test
   ```



# Code Challenge for Scoutbase

If you’re reading this, then you’ve applied for a position at Scoutbase.

This directory includes two subdirectories:

- `front-end` with focus on React, SSR, Apollo & `styled-components`
- `back-end` with focus on SQL, Node.js, GraphQL

You can do one or you can do two.

## Instructions

You have received this directory within the .zip archive.

1. Create a repo out of the directory with this `README.md` in the root of it.
2. Work on either task following the guidelines in `README.md` within chosen directory.
3. Follow best practices of saving changes to the repo.
4. Upload the repo to your personal Github account and share it with two collaborators:
  1. `Yaass` username – Yassin Askar, co-founder of Scoutbase
  2. `kuka` username – Kuanysh, consultant
5. Expect a response within 10 working days after sharing the task, you’ll be contacted with the info you’ve provided during initial registration.
