const mongoose = require("mongoose");

module.exports.dbConnector = () => {
    mongoose.connect(
        "mongodb+srv://admin:admin@cluster0.87eih.mongodb.net/CMS?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true, 'useCreateIndex': true }
    );

    let db = mongoose.connection;
    db.once("error", (err) => {
        console.log("err in connection to data base!");
        console.log(err);
    });
    db.once("open", () => {
        console.log(" connected to data base!");
    });
};