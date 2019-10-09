
const directors = (sequelize, DataTypes) => {
    const Directors = sequelize.define('Directors', {
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
    Directors.associate = (models) => {
        Directors.belongsToMany(models.Actors, { through: 'actors_directors' });
    };
      return Directors;
  };
  
  export default directors;