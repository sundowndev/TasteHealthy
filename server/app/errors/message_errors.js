export const errorApi = (err) => {
  return { code: 100, message: err };
};

export const formatResponse = (res) => {
  return { code: 100, message: res };
};
