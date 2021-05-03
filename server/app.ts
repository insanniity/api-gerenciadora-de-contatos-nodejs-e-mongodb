import * as express from  'express';
import DataBase from './db';
import Controller from './controller'
import * as bodyParser from 'body-parser';

class App{
    public app: express.Application;
    private dataBase: DataBase;
    private controller: Controller;

    constructor(){
        this.app = express();
        this.midleware();
        this.dataBase = new DataBase();
        this.dataBase.createConnection();
        this.routes();
        this.controller=  new Controller();
    }

    midleware(){
       this.app.use(bodyParser.json());
       this.app.use(bodyParser.urlencoded({extended: true}));
    }

    routes(){
        this.app.route('/').get((req, res) => {res.status(200).json({"result" :'Hello World!'})});
        this.app.route('/contacts').get((req, res) => {this.controller.select(req, res)});
        this.app.route('/contacts/:id').get((req, res) => {this.controller.selectOne(req, res)});
        this.app.route('/contacts/:id').delete((req, res) => {this.controller.delete(req, res)});
        this.app.route('/contacts/:id').put((req, res) => {this.controller.update(req, res)});
        this.app.route('/contacts').post((req, res) => {this.controller.create(req, res)});
        
    }

    

}

export default new App();