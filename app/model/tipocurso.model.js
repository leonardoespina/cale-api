module.exports = (sequelize, Sequelize) => {
  const TipoUsuario = sequelize.define("tipocursos", {
    curso: {
      type: Sequelize.STRING,
    },
  });

  return TipoUsuario;
};
