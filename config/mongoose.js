const mongoose = require("mongoose");
const db = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/products", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((con) => {
        console.log(`MongoDB database with host :: ${con.connection.host}`)
    })
};

module.exports = db;