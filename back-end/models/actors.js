
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
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
    Actors.associate = (models) => {
        Actors.BelongsToMany(models.Movies, { through: 'movies_actors' });
        Actors.BelongsToMany(models.Directors, { through: 'actors_directors' });
    };
    return Actors;
  };
  
  export default actors;