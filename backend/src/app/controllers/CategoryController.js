const Categoryervice = require('../services/CategoryService');

class CategoryController {
    
    static async index(req, res) {
        let categoryList = await Categoryervice.getAll();

        return categoryList !== null ? res.status(200).json(categoryList) : res.status(404);
    };

    static async create(req, res) {
        let categoryData = req.body;
        let category;

        try {
            category = await Categoryervice.create(categoryData);
        } catch (error) {
            return res.status(500).json(error)
        }

        return category !== null ? res.status(200).json(category) : res.status(404);
    };
};

module.exports = CategoryController;