// Externals libraries
import helmet from 'helmet';
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import logger from 'morgan';

// Internals libraries
// import initializeExpressArgument from '@/common/initialize-express-argument';
import api_response from '@/response/api_response';
import api_response_error from '@/response/api_error_response';
import { connect } from '@/db/db.connect';

// Routes
import products from '@/routes/products';

// ---------- GLOBALS ----------
const app = express();

// ---------- INITIALIZE DATABASE ----------
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
connect();

// ---------- CONFIGURATION HEADERS HTTP ----------
// app.use(config_headers);
// app.use(mandatory_headers);

app.use(logger('[:method] :url :status - :response-time ms'));

// ROUTES
app.use('/products', products);

// ---------- RESPONSE ----------
// SUCCESS
app.use(api_response);
// ERROR
app.use(api_response_error);

// ---------- SERVER ----------
const port = process.env.PORT || '3000';

app.set('port', port);

const server = http.createServer(app);

server
  .listen(port, () => {
    const host = server.address().address;
    const port = server.address().port;

    process.stdout.write(`running at http://${host}:${port}\n`);
    return;
  })
  .on('error', console.error);

process.on('SIGINT', () => {
  process.exit(-1);
});
