import { Router } from 'express';
import auth from './auth';
import story from './story';

const routes = Router();

routes.use('/api/auth', auth);
routes.use('/api/stories', story);

routes.get('/', async (req, res) => {
    res.json({ message: 'Hello World. Its HackerNoon Api.' })
});

export default routes;
