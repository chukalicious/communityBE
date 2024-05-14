require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 8000
const cors = require("cors")
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")    

const userRouter = require("./routes/userRoutes")
const postRoutes = require("./routes/postRoutes")

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true })) 
app.use(cors(
    {
  origin: 'http://localhost:5173', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
  credentials: true // Allow credentials (e.g., cookies, authorization headers)
}
))
app.use(errorHandler)

app.use("/api/users", userRouter)
app.use("/api/posts", postRoutes)




app.get("/", (req, res) => {
    res.send({message: `Api is up 😊`} )
}
)   






app.listen(port, () => {
    console.log(`Server is running in port ${port}`)
    })  