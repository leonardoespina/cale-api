const auth = require("../middleware/auth.js");
module.exports = function (app) {
  const cursos = require("../controller/curso.controller.js");

  // Create Curso
  app.post("/api/curso", auth, cursos.createOne);

  ///
};
