import * as express from  'express';
import DataBase from './db';

class App{
    public app: express.Application;
    private dataBase: DataBase;

    constructor(){
        this.app = express();
        this.dataBase = new DataBase();
        this.dataBase.createConnection();
        this.routes();
    }

    routes(){
        this.app.get('/', (req, res) => {res.status(200).json({"result" :'Hello World!'})})
    }

}

export default new App();