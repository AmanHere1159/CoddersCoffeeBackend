const { readUserFileSync, writeUserFileSync } = require("../Controller/asyncfunction");
const Signup = require("../Model/signupModel");
exports.SignupModule= async (req, res, next) => {
 try {
    const body = req.body;
    const { name, email, country, zipcode, password} = body;
    console.log("body recivied", body);
    let data = readUserFileSync();
   
    const exists = data.find(user => user.email === email)


    if(exists){
      return res.status(201).json({
        message: "You have alredy registered please go back and SignUp please",
        data: email,
      });
    }
    const details = await Signup.create(exists);
  //  writeUserFileSync(body);
   console.log("User added successfully")
     return res.status(200).json({
      message: "User added successfully",
      data: body,
    });
  } 
  catch (error) {
    console.log(error);
    res.status(409).json({ message: "Something went wrong" });
  }
};





