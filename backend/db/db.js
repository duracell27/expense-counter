const mongoose = require('mongoose');

const db = async (req, res, next) => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('db connected')
    } catch (error) {
        console.log('Db connection errorx')
        console.log(error)
    }
}

module.exports = {db}