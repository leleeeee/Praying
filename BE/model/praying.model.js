const mongoose = require(`mongoose`)

const {Schema} = mongoose

const PrayingSchema = Schema({
    date: Date,
    pray: String,
})

const PrayingModel = mongoose.model("Praying", PrayingSchema, "praying");

export default PrayingModel;