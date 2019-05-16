import Sequelize from 'sequelize';
import * as msg from '@/errors/message_errors.js';
import models from '@/db/models';

const Products = models.Products;
const Facts = models.Facts;
// const MiscData = models.MiscData;
const Op = Sequelize.Op;

export const get_products = (req, res, next) => {
  let query = null;

  if (req.query.query) {
    query = {
      where: {
        product_name: {
          [Op.substring]: req.query.query,
        },
      },
      limit: req.limit,
      offset: req.offset,
      order: [
        ['id', 'DESC'],
      ],
    };
  } else {
    query = {
      limit: req.limit,
      offset: req.offset,
      order: [
        ['id', 'DESC'],
      ],
    };
  }

  Products.findAll(query).then((projects) => {
    req.results = projects.length;
    req.return = projects;

    return next();
  })
    .catch((error) => next(msg.errorApi(error)));
};

export const get_one_product = (req, res, next) => {
  let query = null;

  query = {
    where: {
      id: req.params.productId,
    },
  };

  Products.findOne(query).then((projects) => {
    if (!projects) {
      return next(msg.productNotFound());
    }

    req.return = projects;

    return next();
  })
    .catch((error) => next(msg.errorApi(error)));
};

export const get_one_product_facts = (req, res, next) => {
  // client
  //   .query(
  //     `SELECT ${product_nutrition_facts_fields.join(
  //       ',',
  //     )} FROM product_nutrition_facts WHERE product_id = $1`,
  //     [req.params.productId],
  //   )
  //   .then((res) => {
  //     if (!res.rows[0]) {
  //       return next(msg.productNotFound());
  //     }

  //     req.return = res.rows[0];

  //     return next();
  //   })
  //   .catch((error) => next(msg.errorApi(error)));

  let query = null;

  query = {
    where: {
      productId: req.params.productId,
    },
  };

  Facts.findOne(query).then((projects) => {
    if (!projects) {
      return next(msg.productNotFound());
    }

    req.return = projects;

    return next();
  })
    .catch((error) => next(msg.errorApi(error)));
};

// export const get_one_product_misc_data = (req, res, next) => {
//   client
//     .query(
//       `SELECT ${product_misc_data_fields.join(
//         ',',
//       )} FROM product_misc_data WHERE product_id = $1`,
//       [req.params.productId],
//     )
//     .then((res) => {
//       if (!res.rows[0]) {
//         return next(msg.productNotFound());
//       }

//       req.return = res.rows[0];

//       return next();
//     })
//     .catch((error) => next(msg.errorApi(error)));
// };
