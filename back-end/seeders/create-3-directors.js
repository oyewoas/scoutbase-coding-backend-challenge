import faker from 'faker'

export default {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Directors',
    [
      {
        id: 1,
        name: faker.internet.userName(),
        birthday: faker.date.past(),
        country: faker.address.country(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: faker.internet.userName(),
        birthday: faker.date.past(),
        country: faker.address.country(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: faker.internet.userName(),
        birthday: faker.date.past(),
        country: faker.address.country(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],
    {}
  ),
  
  down: (queryInterface) => queryInterface.bulkDelete('Directors', null, {})
};
