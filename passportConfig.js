const LocalStraregy = require("passport-local").Strategy;
const User = require("./models/user");
module.exports = (passport) => {
    passport.use(
    "local-signup",
    new localStrategy(
    
    )
    );
    passport.use(
    "local-login",
    new LocalStrategy(
    {
    usernameField: "email",
    passwordField: "password",
    },
    async (email, password, done) => {
    try {
    const user = await User.findOne({ email: email });
    if (!user) return done(null, false);
    const isMatch = await user.matchPassword(password);
    if (!isMatch)
    return done(null, false);
    // if passwords match return user
    return done(null, user);
    } catch (error) {
    console.log(error)
    return done(error, false);
    }
    }
    )
    );
    };