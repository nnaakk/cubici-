const mongoose = require('mongoose')

const dbUrl = 'mongodb://127.0.0.1:27017/cubove'
async function initDatabase() {
    await mongoose.connect(dbUrl)

    console.log('db connected');
}

module. exports = initDatabase