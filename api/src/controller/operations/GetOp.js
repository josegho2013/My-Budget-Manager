const { Operations } = require("../../db");

async function getOperationsDb(req, res, next) {
  try {
    let opDataBase = await Operations.findAll({
      attributes: ["id", "type", "concept", "amount", "date"],
    });

    return res.status(200).json(opDataBase);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getOperationsDb,
};
