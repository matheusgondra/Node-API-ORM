'use strict';

const { pegaTodasAsPessoas } = require("../controllers/PessoaController");

module.exports = (sequelize, DataTypes) => {
  const Pessoa = sequelize.define('Pessoas', {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  Pessoa.associate = function(models) {
    Pessoa.hasMany(models.Turmas, {
      foreignKey: "docent_id"
    });
    Pessoa.hasMany(models.Matriculas, {
      foreignKey: "estudante_id"
    });
  };
  return Pessoa;
};