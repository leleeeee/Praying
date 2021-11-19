const mongoose = require(`mongoose`)

const {Schema} = mongoose

const PrayingSchema = Schema({
    no: Number,
    pray: String,
})

const PrayingModel = mongoose.model("Praying", PrayingSchema, "praying");

export default PrayingModel;