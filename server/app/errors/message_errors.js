export const errorApi = (err) => {
  return { status: 500, message: err || 'An internal error occured.' };
};

export const formatResponse = (res) => {
  return { status: 400, message: res };
};

export const productNotFound = () => {
  return { status: 404, message: 'Product not found.' };
};

export const categoryNotFound = () => {
  return { status: 404, message: 'Category not found.' };
};
