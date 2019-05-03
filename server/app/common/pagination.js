export const paginate = (limit) => {
  return function(req, res, next) {
    req.limit = limit || 20;
    req.page = parseInt(req.query.page, 10) || 1;
    req.offset = (req.page - 1) * req.limit;

    return next();
  };
};
