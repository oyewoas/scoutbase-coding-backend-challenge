
import {
  sequelize, dataTypes, checkModelName, checkPropertyExists
} from 'sequelize-test-helpers';

import UserModel from '../../models/users';

describe('Test for Users Model', () => {
  const User = UserModel(sequelize, dataTypes);
  const users = new User();

  checkModelName(User)('Users');

  context('properties', () => {
    ['name', 'password'].forEach(checkPropertyExists(users));
  });
});
