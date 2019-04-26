export default function(req, res, next) {
  if (!res.finished) {
    res.set('Content-Type', 'application/json; charset=utf-8');
    if (!req.route) res.sendStatus(404);
    else {
      let json = { success: true };

      if (req.message) {
        json.message = req.message;
      }

      if (req.return) {
        if (Array.isArray(req.return)) json.items = req.return;
        else json.item = req.return;
      }
      if (req.opts_return) {
        json = Object.assign(json, req.opts_return);
      }

      res.status(req.status || 200);
      res.json(json);
    }
  }

  return next();
}
