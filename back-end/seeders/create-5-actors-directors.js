
export default {
  up: (queryInterface) => queryInterface.bulkInsert(
    'actors_directors',
    [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        ActorId: 1,
        DirectorId: 1
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        ActorId: 2,
        DirectorId: 2
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        ActorId: 3,
        DirectorId: 3
      },
    ],
    {}
  ),
    
  down: (queryInterface) => queryInterface.bulkDelete('actors_directors', null, {})
};

