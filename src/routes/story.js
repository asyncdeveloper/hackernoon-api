import { Router } from 'express'
import { validate } from '../middlewares/validate';
import { storyCreateRules } from '../validators/StoryValidator';
import { verifyToken } from '../middlewares/auth';
import StoryController from '../controllers/StoryController';

const router = Router();

router.post('/', verifyToken, storyCreateRules(), validate, StoryController.create);
router.get('/', verifyToken,  StoryController.all);


export default router;
