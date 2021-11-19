import mongoose from "mongoose";

const connDatabase = () => {
    const mongoUrl = `mongodb://`
    console.log(`Connecting to ${mongoUrl}`);
    mongoose.Promise = global.Promise;

    mongoose
        .connect(mongoUrl,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        .then(() => {
            console.log("Successfully connect to Database")
        })
        .catch((error) => {
            console.log(`Cannot connect to Database ${error}`)
            process.exit()
        })
}

export default connDatabase;