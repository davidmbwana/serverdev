const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	googleId: String
});

// this creates an instance of an object to be sent to the database
mongoose.model('users', userSchema);