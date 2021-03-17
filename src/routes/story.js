import { Router } from 'express'
import { validate } from '../middlewares/validate';
import { storyCreateRules, storyShowRules } from '../validators/StoryValidator';
import { verifyToken } from '../middlewares/auth';
import StoryController from '../controllers/StoryController';

const router = Router();

router.post('/', verifyToken, storyCreateRules(), validate, StoryController.create);
router.get('/', verifyToken,  StoryController.all);
router.get('/:id', verifyToken, storyShowRules(), validate, StoryController.show);
router.delete('/:id', verifyToken, storyShowRules(), validate, StoryController.delete);


export default router;
