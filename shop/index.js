//CONSTANTES
const express = require("express");
const app = express();
const mgs = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users")
dotenv.config();

//MONGODB CONN
mgs.connect(process.env.MONGO_URL)
.then(() => console.log("db ok"))
.catch((err) => {
    console.log(err);
})

//DEPLOY
app.listen(process.env.PORT || 5000,() =>{
    console.log("Backend server is ready");
});

app.use(express.json());
//ROUTES
app.use("/api/user", userRoute);
