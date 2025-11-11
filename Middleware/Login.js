const { readUserFileSync } = require("../Controller/asyncfunction");
const Signup = require("../Model/signupModel");


exports.LoginModule=async (req,res,next)=>{
    const body = req.body;
    const { email,  password} = body;

    console.log("body recivied", body);
    // let data = readUserFileSync();
    let data = await Signup.find({});
    const forEmail = data.find(user => user.email === email)
    console.log("User Found",forEmail)
      if (!forEmail) {
    return res.status(404).json({ message: "Wrong Email or Password" });
  }
      if(forEmail.password === password){
      return res.status(201).json({
        message: "Logged in successfully",
        pasword:  forEmail.password,
      });
    }
       return res.status(404).json({
      message: "Wrong Email or Password"
    });
    
}