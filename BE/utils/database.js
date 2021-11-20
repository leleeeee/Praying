const mongoose = require("mongoose");

const connDatabase = () => {
    const mongoUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.afe0o.mongodb.net/test`
    console.log(`Connecting to ${mongoUrl}`);
    mongoose.Promise = global.Promise;

    mongoose
        .connect(mongoUrl,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Successfully connect to Database")
        })
        .catch((error) => {
            console.log(`Cannot connect to Database ${error}`)
            process.exit()
        })
}

module.exports = connDatabase;