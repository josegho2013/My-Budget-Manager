const { User } = require("../../models");




async function getUserDb(req, res, next) {
    try {
      let userDataBase = await User.findAll({
        attributes: [
          "id",
          "name",
          "last_name",
          "email",
          "date_of_birth",
          "sexo",

        ],
     
      });
  
      return res.status(200).json(userDataBase);
    } catch (error) {
      next(error);
    }
  }
  
  module.exports = {
    getUserDb
  };
  