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

    async all(req, res, next) {
        try {
           const stories =  await firebaseAdmin.firestore()
                .collection('stories')
                .where('published', '==', true)
                .get();

            let data = [];
            for(const doc of stories.docs){
                const item = doc.data();
                item.id = doc.id
                data.push(item);
            }

            return res.status(HttpStatusCode.OK)
                .json({ message: "Stories fetched successfully.", stories: data });
        } catch (err) {
            next(err);
        }
    }

    async show(req, res, next) {
        try {
            //TODO:: show to only the owner if published is not true
            const story = await firebaseAdmin.firestore()
                .collection('stories')
                .doc(req.params.id)
                .get()
                .data();

            return res.status(HttpStatusCode.OK)
                .json({ message: "Story fetched successfully.", story });
        } catch (err) {
            next(err);
        }
    }

}

export default new StoryController();
