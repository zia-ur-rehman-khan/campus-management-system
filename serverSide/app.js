const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const port = process.env.PORT || 6000
const dbHelper = require("./dbHelper/dbHelper.js")

const app = express()

app.use(cors())


app.get("*", (req, res) => {
    res.send("<h1>Welcome to OLX Server</h1>");
});








app.listen((port), (err) => {
    if (err) {
        console.log("server is not in listining mood!!")
        return
    }
    console.log("server is in listning mood")
    dbHelper.dbConnector()
})


