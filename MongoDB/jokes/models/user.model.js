const mongoose = require('mongoose');
 
const UserSchema = new mongoose.Schema({
    setup: {type :String,required:[true,"setp is requred"],minlength:[3,"setup should be tleast 3"]},
    punchline: {type :String,required:[true,"punchline is requred"],minlength:[10,"punchline should be tleast 10"]},
    created_at    : { type: Date, required: true, default: Date.now },
    updated_at    : { type: Date, required: true, default: Date.now }
},
);
 
const User = mongoose.model('User', UserSchema);
 
module.exports = User;