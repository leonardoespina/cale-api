const env = require("./env.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  //operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/Tables
db.cursos = require("../model/curso.model.js")(sequelize, Sequelize);
db.users = require("../model/user.model.js")(sequelize, Sequelize);
db.TipoUsuarios = require("../model/tipousuario.model.js")(
  sequelize,
  Sequelize
);
db.tipoCursos = require("../model/tipocurso.model.js")(sequelize, Sequelize);

//db.users.hasOne(db.TipoUsuario);

/*db.TipoUsuarios.hasMany(db.users, {
  foreignKey: "id",
});*/
db.TipoUsuarios.hasOne(db.users, { foreignKey: "idUser" });
db.users.belongsTo(db.TipoUsuarios, { foreignKey: "idUser" });
module.exports = db;
//db.users.hasOne(db.TipoUsuario);
/*db.TipoUsuarios.hasMany(db.users, { foreignKey: "idUser" });
db.users.belongsTo(db.TipoUsuarios, { foreignKey: "idUser" });*/
