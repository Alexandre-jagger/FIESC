'use strict';
module.exports = (sequelize, DataTypes) => {
  const RegistroPonto = sequelize.define('RegistroPonto', {
    data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    horario: {
      type: DataTypes.TIME,
      allowNull: false
    },
    colaboradorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Colaboradores',
        key: 'id'
      }
    }
  }, {});
  RegistroPonto.associate = function(models) {
    RegistroPonto.belongsTo(models.Colaborador, { foreignKey: 'colaboradorId' });
  };
  return RegistroPonto;
};
