export default function(error, req, res, next) {
  if (!res.finished) {
    res.set('Content-Type', 'application/json; charset=utf-8');
    if (error instanceof Error) {
      req.logger.error({
        route: `${req.method} - ${req.url}`,
        message: error.stack,
      });
      res.sendStatus(500);
    } else {
      error.message = 'Unknown Error';
      res.status(404);
      res.json({
        success: false,
        errorMessage: error.message,
        errorCode: error.code,
      });

      req.logger.warn({
        route: `${req.method} - ${req.url}`,
        message: error,
      });
    }
  }

  return next();
}
