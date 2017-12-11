const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoURI);


const app = express();

//this cookie session code
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 100,
		keys: [keys.cookieKey]
	})
);
//this cookie session code
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);



console.log('running');


const PORT = process.env.PORT || 5000;
app.listen(PORT);