const router = require("express").Router();
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken");

const passport = require("passport");


//to register

router.post("/register", async (req, res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString(),
    });
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch(err){
            res.status(500).json(err);
    }
})

///////////////google login

const CLIENT_URL = "http://localhost:3000";

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/login/failed",
  })
);

router.get("/login/success", async (req, res) => {
    if (req.user) {
      const userGoogle = await User.findOne({email: req.user._json.email});

      if(userGoogle === null){
        res.status(401).json("Google Login failed");
        return
      }

      const accessToken = jwt.sign({
        id:userGoogle._id, 
        isAdmin: userGoogle.isAdmin,
    }, 
        process.env.JWT_SECRET,
        {expiresIn: "20d"}
    );
    const {password, ...others } = userGoogle._doc; //remove necessary information
    res.status(200).json({...others, accessToken})
    /*
      res.status(200).json({
        success: true,
        message: "successfull",
        user: req.user,
        //cookies: req.cookies
      });
      */

    }
  });
  
  router.get("/login/failed", async (req, res) => {
    res.status(401).json({
      success: false,
      message: "failure",
    });
  });
  
  router.get("/logout", async (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL);
  });
/*
  router.get("/login/google", async (req, res) => {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //cookies: req.cookies
    });
  });
*/


////////////////////////////////////////////////////


//login
router.post("/login", async (req,res)=>{
    try{
        const user = await User.findOne({username: req.body.username});
        const email = await User.findOne({email: req.body.username});
        var data;

        if(user === null && email === null){
          res.status(401).json("wrong credentials");
          return
        }
        
        if(user === null){
          data = email;
        }
        else{
          data = user;
        }

        const hashedPassword = CryptoJS.AES.decrypt(data.password, process.env.PASS_SECRET);
        const O_password = hashedPassword.toString(CryptoJS.enc.Utf8);
        console.log(O_password)
        if(O_password !== req.body.password){
            res.status(401).json("wrong credentials");
            return //so that backend would not crash if wrong credentials are entered
        }

        const accessToken = jwt.sign({
            id:data._id, 
            isAdmin: data.isAdmin,
        }, 
            process.env.JWT_SECRET,
            {expiresIn: "20d"}
        );

        const {password, ...others } = data._doc; //remove opassword from user
        res.status(200).json({...others, accessToken})

    }
    catch(err){
        res.status(500).json(err);
    }
});
module.exports = router

