import HttpStatusCode from 'http-status-codes';
import { firebaseAdmin } from '../config/config';

class StoryController {

    async create(req, res, next) {
        try {
            const { title, markup, excerpt, tags, mainImage, wordCount, published = false } = req.body;

            const story = { title, tags, excerpt, markup, mainImage, wordCount, creator : req.userId, published };

            await firebaseAdmin.firestore().collection('stories').doc().set(story);

            return res.status(HttpStatusCode.CREATED)
                .json({ message: "Story created successfully." });
        } catch (err) {
            next(err);
        }
    }

}

export default new StoryController();
