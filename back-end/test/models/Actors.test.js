import chai from 'chai';
import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists
} from 'sequelize-test-helpers';

import ActorModel from '../../models/actors';

const { expect } = chai;
const sinonChai = require('sinon-chai');

chai.use(sinonChai);
describe('Test for Directors Model', () => {
  const Actor = ActorModel(sequelize, dataTypes);
  const actors = new Actor();

  checkModelName(Actor)('Actors');

  context('properties', () => {
    ['name', 'birthday', 'country'].forEach(checkPropertyExists(actors));
  });


  context('associations', () => {
    const Movies = 'The movies';
    const Directors = 'The directors';


    before(() => {
      Actor.associate({ Movies });
      Actor.associate({ Directors });
    });

    it('defined a belongsToMany association with Movies and Directors', () => {
      expect(Actor.belongsToMany).to.have.been.calledWith(Movies, { through: 'movies_actors' });
      expect(Actor.belongsToMany).to.have.been.calledWith(Directors, { through: 'actors_directors' });
    });
  });
});
