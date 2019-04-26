export const get_products = (req, res, next) => {
  req.message = 'ok l\'élite';
  req.return = { a: 1 };

  return next();
};
