const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017"

const connectToMongo = ()=>{
    console.log("Connected to Mongoo Successfully")
    // mongoose.connect(mongoURI, ()=>{
    // })
}
module.exports = connectToMongo;