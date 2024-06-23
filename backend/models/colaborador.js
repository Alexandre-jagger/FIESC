module.exports = (sequelize, DataTypes) => {
    const Colaborador = sequelize.define('Colaborador', {
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dataNascimento: {
        type: DataTypes.DATE,
        allowNull: false
      },
      dataAdmissao: {
        type: DataTypes.DATE,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      cargo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      funcao: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dataRescisao: {
        type: DataTypes.DATE,
        allowNull: true
      },
      horarios: {
        type: DataTypes.JSON,
        allowNull: false
      },
      usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    });
  
    return Colaborador;
  };
  