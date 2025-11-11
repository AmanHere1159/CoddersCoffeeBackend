const { readUserFileSync, writeUserFileSync } = require("../Controller/asyncfunction");
const Signup = require("../Model/signupModel");
exports.SignupModule= async (req, res, next) => {
 try {
    const body = req.body;
    const { name, email, address, password, landmark ,pincode} = body;
    const dataToSave = { name, email, address, pincode, password, landmark };
    console.log("body recivied", body);
    // let data = readUserFileSync();
   let data = await Signup.find({});
    const exists = data.find(user => user.email === email)


    if(exists){
      return res.status(201).json({
        message: "You have alredy registered please go back and Login please",
        data: email,
      });
    }
    const details = await Signup.create(dataToSave);
  //  writeUserFileSync(body);
   console.log("User added successfully")
     return res.status(200).json({
      message: "User added successfully",
      data: details,
    });
  } 
  catch (error) {
    console.log(error);
    res.status(409).json({ message: "Something went wrong" });
  }
};





