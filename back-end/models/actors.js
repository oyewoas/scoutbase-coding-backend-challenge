
const actors = (sequelize, DataTypes) => {
    const Actors = sequelize.define('Actors', {
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      birthday: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
    Actors.associate = (models) => {
        Actors.belongsToMany(models.Movies, { through: 'movies_actors' });
        Actors.belongsToMany(models.Directors, { through: 'actors_directors' });
    };
    return Actors;
  };
  
  export default actors;