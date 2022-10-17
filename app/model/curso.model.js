module.exports = (sequelize, Sequelize) => {
  const Curso = sequelize.define("cursos", {
    nombreCurso: {
      type: Sequelize.STRING,
    },
    objetivos: {
      type: Sequelize.STRING,
    },
    FechaFinal: {
      type: Sequelize.STRING,
    },
    FechaInicio: {
      type: Sequelize.STRING,
    },
    precio: {
      type: Sequelize.FLOAT,
    },

    unidades: {
      type: Sequelize.INTEGER,
    },
    cantidadParticipantes: {
      type: Sequelize.INTEGER,
    },
    /*  idUser: {
      type: Sequelize.INTEGER,
    },*/
  });

  return Curso;
};
