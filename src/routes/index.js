import { Router } from 'express';
import auth from './auth';

const routes = Router();

routes.use('/api/auth', auth);

routes.get('/', async (req, res) => {
    res.json({ message: 'Hello World. Its HackerNoon Api.' })
});

export default routes;
