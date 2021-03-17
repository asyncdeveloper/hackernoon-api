import { Router } from 'express';

const routes = Router();

routes.get('/', async (req, res) => {
    res.json({ message: 'Hello World. Its HackerNoon Api.' })
});

export default routes;