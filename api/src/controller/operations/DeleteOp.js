const { Operations } = require("../../db");

async function DeleteOperations(req, res, next) {
  const id = req.params.id;

  try {
    const operationsId = await Operations.destroy({
      where: { id },
    });

    return res.sendStatus(200);
  } catch (error) {
    return res.status(404).send("You Cannot Delete This Operation!");
  }
}

module.exports = {
  DeleteOperations,
};
