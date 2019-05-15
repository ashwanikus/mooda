const mongoose = require("mongoose");

const MoodSchema = new mongoose.Schema({
    mood_type: String,
    mood_id: String
});

module.exports = mongoose.model("MoodType", MoodSchema,"MoodType");