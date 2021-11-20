const mongoose = require(`mongoose`)

const {Schema} = mongoose

const PrayingSchema = Schema({
    date: String,
    pray: String,
})

const PrayingModel = mongoose.model("Praying", PrayingSchema, "praying");

module.exports = PrayingModel