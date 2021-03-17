import 'babel-polyfill';
import express from 'express';
import helmet from 'helmet';

import routes from './routes/index';

class App {

    constructor () {
        this.express = express();

        this.setUpRoutes();
    }

    setUpRoutes() {
        this.express.use(helmet());
        this.express.use(express.json());

        this.express.use('/', routes);
    }
}

export default new App();
