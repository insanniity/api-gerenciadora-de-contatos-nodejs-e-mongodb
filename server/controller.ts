import model from './model';


class Controller{

    constructor(){

    }

    getContacts(){
        return model.find({});
    }

    select(req, res){
        this.getContacts()
            .then(contacts => res.status(200).json({'result': contacts}))
            .catch(err => res.status(400).json({'result': err}));
    }

    getContactById(id){
        return model.find(id);
    }

    selectOne(req, res){
        const id = {_id: req.params.id};
        this.getContactById(id)
            .then(contacts => res.status(200).json({'result': contacts}))
            .catch(err => res.status(400).json({'result': err}));
    }

    deleteContactById(id){
        return model.deleteOne(id);
    }

    delete(req, res){
        const id = {_id: req.params.id};
        this.deleteContactById(id)
            .then(contacts => res.status(200).json({'result': contacts}))
            .catch(err => res.status(400).json({'result': err}));
    }

    updateContact(id, data){
        return model.findOneAndUpdate(id, data);
    }

    update(req, res){
        const id = {_id: req.params.id};
        const contato = req.body;
        this.updateContact(id, contato)
            .then(contacts => res.status(200).json({'result': contacts}))
            .catch(err => res.status(400).json({'result': err}));
    }

    createContact(data){
        return model.create(data);
    }

    create(req, res){        
        const contato = req.body;
        this.createContact(contato)
            .then(contacts => res.status(200).json({'result': contacts}))
            .catch(err => res.status(400).json({'result': err}));
    }

}

export default Controller;