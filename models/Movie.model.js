const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const movieSchema = new mongoose.Schema(
    {
        title: String,
        director: String,
        stars: [{ type: String }],
        image: String,
        description: String,
        showtimes: [{ type: String }]
    },
    {
        timestamps: true
    }
)

module.exports = model('Movie', movieSchema);