const bodyParse = require("body-parser");
const pessoas = require("./pessoasRoute");
const niveis = require("./niveisRoute");
const turmas = require("./turmasRoute");

module.exports = (app) => {
   app.use(
      bodyParse.json(),
      bodyParse.urlencoded({ extended: false }),
      pessoas,
      niveis,
      turmas
   );
}