
const movies = (sequelize, DataTypes) => {
    const Movies = sequelize.define('Movies', {
      title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
      }
    });
    Movies.associate = (models) => {
        Movies.belongsToMany(models.Actors, { through: 'movies_actors' });
    };
    return Movies;
  };
  
  export default movies;