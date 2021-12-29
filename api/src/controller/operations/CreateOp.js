const { Operations } = require("../../db");
const { v4: uuidv4 } = require("uuid");

async function createOperation(req, res) {
  let { type, concept, amount, date } = req.body;

  try {
    let opCreate = await Operations.create({
      id: uuidv4(),
      type,
      concept,
      amount,
      date,
    });

    return res.status(200).send(opCreate);
  } catch (error) {
    return res.send(error);
  }
}

module.exports = {
  createOperation,
};
