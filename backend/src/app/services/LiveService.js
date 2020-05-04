const { Live } = require('../models');

class LiveService {
    static async getAll() {

        try {
            return Live.findAll();
        } catch (error) {
            throw new Error('Error ao consultar live, tente novamente mais tarde');
        }
    };

    static async create(liveObj) {

        try {
            return Live.create(liveObj);
        } catch (error) {
            throw new Error('Error ao inserir live, tente novamente mais tarde');
        }
    };

};

module.exports = LiveService;