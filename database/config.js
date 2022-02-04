const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        mongoose.connect(process.env.DB_CNN, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
        });

        console.log('Db Online');

    } catch (error) {
        console.log(error);
        throw new Error('Fail to connect to database');
    }
}

module.exports = {
    dbConnection
}