const model = require('./../../models')['Bank'];

const BankService = {
    getAll: ()=> {
        return model.findAll({});
    }
};

module.exports = (BankService);