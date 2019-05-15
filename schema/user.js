const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    name: String,
    mood_type: String,
    currentDate: Date,
    message: String
});

// Export the model
module.exports = mongoose.model("Employee", EmployeeSchema, "Employee");