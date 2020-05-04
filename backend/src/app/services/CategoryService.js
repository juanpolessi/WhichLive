const { Category } = require('../models');

class CategoryService {

    static async getAll() {
        const categories = await Category.findAll();
        let categoriesWithLives = [];
        let lives;

        for (let i = 0; i < categories.length; i += 1) {
            lives = await categories[i].getLives();
            categoriesWithLives.push({
                ...categories[i].dataValues,
                lives
            });
        }
        return categoriesWithLives;
    };

    static async create(objCategory) {
        return await Category.create(objCategory);
    };
};

module.exports = CategoryService;