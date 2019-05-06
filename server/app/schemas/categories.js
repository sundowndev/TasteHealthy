import Joi from 'joi';
import test_schema from '@/common/test_schema_joi';

export const get_categories = (req, res, next) => {
  test_schema(
    Joi.object().keys({
      page: Joi.number()
        .integer()
        .min(1),
    }),
    req.query,
    next,
  );
};

export const get_one_category = (req, res, next) => {
  test_schema(
    Joi.object().keys({
      categoryId: Joi.number()
        .integer()
        .min(1),
    }),
    req.params,
    next,
  );
};
