export const errorApi = (err) => {
  return { status: 500, message: err };
};

export const formatResponse = (res) => {
  return { status: 400, message: res };
};
