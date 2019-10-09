import faker from 'faker';
import { hashPassword } from '../utils';


export default {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Users',
    [
      {
        id: 1,
        name: faker.internet.userName(),
        password: hashPassword('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: faker.internet.userName(),
        password: hashPassword('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: faker.internet.userName(),
        password: hashPassword('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'name',
        password: hashPassword('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],
    {}
  ),
  
  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {})
};
