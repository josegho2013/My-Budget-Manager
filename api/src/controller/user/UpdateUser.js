const { User } = require("../../models");


async function updateUser(req, res) {
    let { id,  name, last_name, email,userName,password, date_of_birth,sexo} = req.body;
  
    try {
      let userUpdate = await User.update({
        name,
        last_name,
        email,
        userName,
        password,
        date_of_birth,
        sexo,
      },{ where: { id }});
      
  
      return res.status(200).send(userUpdate);
    } catch (error) {
      return res.send(error);
    }
  }

module.exports = {
    updateUser
  };
  