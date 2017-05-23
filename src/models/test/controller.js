const Tests = require('../../models')['Tests'];


module.exports = {

    getAll(req, res) {
        return Tests
            .findAll({})
            .then((tests) => res.status(200).send(tests))
            .catch((error) => res.status(400).send(error));
    }
};