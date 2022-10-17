const db = require("../config/db.config.js");
const Curso = db.cursos;
exports.createOne = (req, res) => {
  //Check Email
  //create User

  console.log(req.body);

  Curso.create({
    nombreCurso: req.body.nombreCurso,
    objetivos: req.body.objetivos,
    precio: req.body.precio,
    unidades: req.body.unidades,
    FechaFinal: req.body.FechaFinal,
    FechaInicio: req.body.FechaInicio,
    cantidadParticipantes: req.body.cantidadParticipantes,
  })
    .then((ress) => {
      console.log(ress);
    })
    .catch((err) => {
      console.log(err);
    });
};
