const mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.promise = global.promise;
mongoose.connect("mongodb://localhost/voteApp");

module.exports.User = require("./user");
module.exports.Poll = require("./poll");
