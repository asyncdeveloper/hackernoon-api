import 'babel-polyfill';
import express from 'express';
import helmet from 'helmet';

import routes from './routes/index';
import errors from './middlewares/errors';

class App {

    constructor () {
        this.express = express();

        this.setUpRoutes();
    }

    setUpRoutes() {
        this.express.use(helmet());
        this.express.use(express.json());

        this.express.use('/', routes);
        this.express.use(errors);
    }
}

export default new App();
