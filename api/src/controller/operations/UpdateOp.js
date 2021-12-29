const { Operations } = require("../../db");


async function updateOperations(req, res) {
    let { id, type, concept, amount, date } = req.body;
  
    try {
      let opUpdate = await Operations.update({
        type,
        concept,
        amount,
        date,
      },{ where: { id }});
      
  
      return res.status(200).send(opUpdate );
    } catch (error) {
      return res.send(error);
    }
  }

module.exports = {
    updateOperations
  };
  