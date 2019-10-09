import { expect } from 'chai';
import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists
} from 'sequelize-test-helpers';

import MovieModel from '../../models/movies';

describe('Test for Movies Model', () => {
  const Movie = MovieModel(sequelize, dataTypes);
  const movies = new Movie();

  checkModelName(Movie)('Movies');

  context('properties', () => {
    ['title', 'year', 'rating'].forEach(checkPropertyExists(movies));
  });


  context('associations', () => {
    const Actors = 'The actors';

    before(() => {
      Movie.associate({ Actors });
    });

    it('defined a belongsToMany association with Actors', () => {
      expect(Movie.belongsToMany).to.have.been.calledWith(Actors, { through: 'movies_actors' });
    });
  });
});
