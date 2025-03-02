
const express=require("express")
const app=express()
const dotenv=require("dotenv").config()
const connectDb=require("./config/connectionDb")
const cors=require("cors")

const PORT=process.env.PORT || 3000
connectDb()


app.use(express.json())
app.use(cors())
app.use(express.static("public"))

app.use("/",require("./routes/user"))
app.use("/recipe",require("./routes/recipe"))

// Define a basic route for "/"
app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// app.listen(PORT,(err)=>{
//     console.log(`app is listening on port ${PORT}`)
// })
