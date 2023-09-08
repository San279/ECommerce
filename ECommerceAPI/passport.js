const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const axios = require("axios")
const dotenv = require("dotenv");

dotenv.config();


passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/api/auth/google/callback",
      },
      async function (accessToken, refreshToken, profile, done) {
        done(null, profile);
        
        const user = {username: profile._json.email,
          email: profile._json.email,
          password: "112233"
        };
        try{
          const res = await axios.post("http://localhost:5000/api/auth/register", user);
        }
        catch(err){
          console.log("user already existed")
        }
        //user.save() */

      }
    )
  );

passport.serializeUser((user, done) => {
    done(null, user);
});
  
passport.deserializeUser((user, done) => {
    done(null, user);
});

