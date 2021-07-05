const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const port = 6000
const dbHelper = require("./dbHelper/dbHelper.js")

const app = express()



app.get("*", (req, res) => {
    res.send("<h1>Welcome to OLX Server</h1>");
});








app.use(cors())
app.listen((port), (err) => {
    if (err) {
        console.log("server is not in listining mood!!")
        return
    }
    console.log("server is in listning mood")
    dbHelper.dbConnector()
})


