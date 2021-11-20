const express = require(`express`)
const router = express.Router()

const PrayingModel = require("../model/praying.model")

router.get("/getPray", async function (req, res){
    try {
        const prays = await PrayingModel.find({})
        res.status(200).json({
            prays: prays
        })
    } catch (error) {
        res.status(400)
    }
})

module.exports = router