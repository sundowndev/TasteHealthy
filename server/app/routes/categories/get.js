import Sequelize from 'sequelize';
import * as msg from '@/errors/message_errors.js';
import models from '@/db/models';

const Categories = models.Categories;
const Products = models.Products;
const Op = Sequelize.Op;

export const get_categories = (req, res, next) => {
  let query = {
    limit: req.limit,
    offset: req.offset,
    order: [['id', 'DESC']],
  };

  Categories.findAll(query)
    .then((documents) => {
      req.results = documents.length;
      req.return = documents;

      return next();
    })
    .catch((error) => next(msg.errorApi(error)));
};

export const get_one_category = (req, res, next) => {
  let query = {
    where: {
      id: req.params.categoryId,
    },
  };

  Categories.findOne(query)
    .then((document) => {
      if (!document) return next(msg.categoryNotFound());

      req.return = document;

      return next();
    })
    .catch((error) => next(msg.errorApi(error)));
};

export const get_products_by_category = (req, res, next) => {
  let query = {
    where: {
      categoryId: req.params.categoryId,
      misc_data: { nutrition_score_fr_100g: { [Op.gt]: 0 } },
    },
    limit: req.limit,
    offset: req.offset,
    order: [
      ['misc_data.nutrition_grade_fr', 'ASC'],
      ['misc_data.nutrition_score_fr_100g', 'DESC'],
    ],
  };

  Products.findAll(query)
    .then((documents) => {
      req.return = documents;

      return next();
    })
    .catch((error) => next(msg.errorApi(error)));
};
