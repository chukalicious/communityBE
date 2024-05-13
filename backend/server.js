require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 8000
const cors = require("cors")
const connectDB = require("./config/db")    

const router = require("./routes/userRoutes")

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true })) 
app.use(cors())

app.use("/api/users", router)



app.get("/", (req, res) => {
    res.send({message: `Api is up 😊`} )
}
)   






app.listen(port, () => {
    console.log(`Server is running in port ${port}`)
    })  