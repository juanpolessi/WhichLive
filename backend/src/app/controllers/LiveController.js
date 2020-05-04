const LiveService = require('../services/LiveService');

module.exports = {
    async index(req, res) {        
        const lives = LiveService.getAll();
        
        return lives !== null ? res.status(200).json(lives) : res.status(404);
    },

    async create(req, res) {
        const liveData = req.body;

        const live = LiveService.create(liveData);

        return live !== null ? res.status(200).json(live) : res.status(404);
    },

    // async delete(request, response) {
        

    //     return response.status(204).send();
    // }
};