import chai from 'chai';
import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists
} from 'sequelize-test-helpers';

import DirectorModel from '../../models/directors';

const { expect } = chai;
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

describe('Test for Directors Model', () => {
  const Director = DirectorModel(sequelize, dataTypes);
  const directors = new Director();

  checkModelName(Director)('Directors');

  context('properties', () => {
    ['name', 'birthday', 'country'].forEach(checkPropertyExists(directors));
  });


  context('associations', () => {
    const Actors = 'The actors';

    before(() => {
      Director.associate({ Actors });
    });

    it('defined a belongsToMany association with Actors', () => {
      expect(Director.belongsToMany).to.have.been.calledWith(Actors, { through: 'actors_directors' });
    });
  });
});
