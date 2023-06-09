const mongoose = require("mongoose");

const Connection = async(MONGODB_URL) => {
    try{
        await mongoose.connect(MONGODB_URL);
        console.log("connected to mongoose")
    }catch(error){
        console.log("ERROR MongoDB URL: ",error)
    }
    
}

module.exports = Connection