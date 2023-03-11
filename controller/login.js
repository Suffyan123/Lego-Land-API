const loginModel = require("../model/login");
exports.Login = async function (req, res) {
  console.log("heree");
  try {
    const checkuser = await loginModel.findOne({ email: req.body.userEmail });
    console.log(checkuser);
    if (checkuser) {
      return res.status(400).json({
        message: "Bad Request! User already Exist",
      });
    }
    if (!checkuser) {
      const createUser = await loginModel.create({
        name: req.body.userName,
        email: req.body.userEmail,
        password: req.body.userPassword,
      });
      return res.status(200).json({
        message: "OK : User is added",
        createUser,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Bad Request you are Permitted in this route",
    });
  }
};
