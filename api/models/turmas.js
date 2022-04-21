'use strict';
module.exports = (sequelize, DataTypes) => {
  const Turmas = sequelize.define('Turmas', {
    data_inicio: DataTypes.DATEONLY
  }, {});
  Turmas.associate = function(models) {
    Turmas.hasMany(models.Matriculas, {
      forignKey: "turma_id"
    });
    Turmas.belongsTo(models.Pessoas, {
      foreignKey: "docent_id"
    });
    Turmas.belongsTo(models.Niveis, {
      forignKey: "nivel_id"
    });
  };
  return Turmas;
};