const mongoose = require('mongoose');
mongoose.set('strictQuery', false)

const dbConnection = async() => {

    try {

        await mongoose.connect( process.env.BD_MOGODB );
        
        console.log('BD Online')


        
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Error to start the DataBase');
    }


}

module.exports = {
    dbConnection
}