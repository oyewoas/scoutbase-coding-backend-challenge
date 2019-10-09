import faker from 'faker'

export default {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Movies',
    [
      {
        id: 1,
        title: faker.name.title(),
        year: 1995,
        rating: faker.random.number(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        id: 2,
        title: faker.name.title(),
        year: 2017,
        rating: faker.random.number(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: faker.name.title(),
        year: 2018,
        rating: faker.random.number(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],
    {}
  ),
  
  down: (queryInterface) => queryInterface.bulkDelete('Movies', null, {})
};
