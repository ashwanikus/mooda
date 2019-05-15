const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

// Export the model
module.exports = mongoose.model("Admin", AdminSchema, "Admin");