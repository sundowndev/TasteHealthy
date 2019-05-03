import Joi from 'joi';
import test_schema from '@/common/test_schema_joi';

export const get_products = (req, res, next) => {
  test_schema(
    Joi.object().keys({
      query: Joi.string()
        .alphanum()
        .min(3)
        .max(45),
      page: Joi.number()
        .integer()
        .min(1),
    }),
    req.query,
    next,
  );
};

export const get_one_product = (req, res, next) => {
  test_schema(Joi.object().keys({}), req.query, next);
};

export const get_product_nutrition_facts = (req, res, next) => {
  test_schema(Joi.object().keys({}), req.query, next);
};
