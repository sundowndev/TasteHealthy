// Externals libraries
import helmet from 'helmet';
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';

// Internals libraries
// import initializeExpressArgument from '@/common/initialize-express-argument';
import api_response from './app/response/api_response';
import api_response_error from './app/response/api_error_response';

// Routes
import products from './app/routes/products';

// ---------- GLOBALS ----------
const app = express();

// ---------- INITIALIZE DATABASE ----------
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(queryParser());

// ---------- CONFIGURATION HEADERS HTTP ----------
// app.use(config_headers);
// app.use(mandatory_headers);

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
