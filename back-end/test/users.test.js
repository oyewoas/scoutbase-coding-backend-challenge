import chai from 'chai';
import faker from 'faker';
import * as userApi from './users-api';

const username = faker.internet.userName();
const password = 'password';
chai.should();
describe('users', () => {
  describe('Create User', () => {
    it('returns a user with correct credentials', async () => {
      const result = await userApi.createUser({ username, password });
      result.should.have.property('data').property('data').property('createUser');
    });

    it('returns a response with wrong credentials', async () => {
      const result = await userApi.createUser({ username, password: 'passw' });
      result.should.have.property('data').property('errors');
      result.should.have.property('data').property('data').property('createUser').eql(null);
    });
    it('returns a response with wrong credentials', async () => {
      const result = await userApi.createUser({ username: 'wrongusername', password: 'password' });
      result.should.have.property('data').property('errors');
      result.should.have.property('data').property('data').property('createUser').eql(null);
    });
  });

  describe('Login User', () => {
    it('returns a user with correct credentials', async () => {
      const result = await userApi.login({ username: 'name', password: 'password' });
      result.should.have.property('data').property('data').property('login');
    });

    it('returns a response with wrong credentials', async () => {
      const result = await userApi.login({ username: 'name', password: 'passw' });
      result.should.have.property('data').property('errors');
      result.should.have.property('data').property('data').property('login').eql(null);
    });
    it('returns a response with wrong credentials', async () => {
      const result = await userApi.login({ username: 'fhdsfjafsdf', password: 'password' });
      result.should.have.property('data').property('errors');
      result.should.have.property('data').property('data').property('login').eql(null);
    });
  });
});
