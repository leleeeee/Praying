const express = require(`express`)
const morgan = require(`morgan`)
const helmet = require(`helmet`)
const cors = require(`cors`)
const dotenv = require(`dotenv`)
const getPray = require(`./BE/routes/pray.routes`)

const connnectDatabase = require("./BE/utils/database")
// dotenv.config()
// connnectDatabase()

const port = process.env.PORT || 3000
const app = express()

app.use(helmet())
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(getPray)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/FE/views/main.html")
})

app.listen(port, () => {
    console.log(`Server is listening to port: ${port}`)
})