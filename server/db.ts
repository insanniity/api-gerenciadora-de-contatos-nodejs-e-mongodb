import * as mongoose from 'mongoose';

class DataBase{
    private dbUrl = 'mongodb://localhost:27017/node-mongoose';
    private dbConnection;

    constructor(){

    }

    createConnection(){
        mongoose.connect(this.dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});
        this.logger(this.dbUrl);
    }


    logger(uri){
        this.dbConnection = mongoose.connection;
        this.dbConnection.on('connected', () => { console.log('mongoose está conectado')});
        this.dbConnection.on('error', (error)=> console.error.bind(console, "Erro na conexao:"+ error));
    }

}

export default DataBase;