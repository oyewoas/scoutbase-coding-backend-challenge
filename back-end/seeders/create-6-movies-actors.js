
export default {
  up: (queryInterface) => queryInterface.bulkInsert(
    'movies_actors',
    [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        ActorId: 1,
        MovieId: 1
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        ActorId: 2,
        MovieId: 2
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        ActorId: 3,
        MovieId: 3
      },
    ],
    {}
  ),
  
  down: (queryInterface) => queryInterface.bulkDelete('movies_actors', null, {})
};
