const {MongoClient} = require('mongodb')
const url = require('./atlas_url.js')
console.log(url)

const Connection = new MongoClient(url)
const dbname = "bank"

const connectToDatabase = async () => {
    try {
        await Connection.connect();
        console.log("connected")
    }catch(e){
        console.log("error")
    }
}

const main = async () => {
    try{
        await connectToDatabase();
    } catch(e){
        console.log("error connection")
    } finally{
        await Connection.close()
    }
}

main();