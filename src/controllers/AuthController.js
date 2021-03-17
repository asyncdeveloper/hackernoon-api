import HttpStatusCode from 'http-status-codes';
import { firebaseAdmin, firebaseAuth } from '../config/config';

class AuthController {

    async register (req, res, next) {
        try {
            const { email, password } = req.body;
            await firebaseAdmin.auth().createUser({ password , email })

            return res.status(HttpStatusCode.CREATED).json({
                message: "User registered successfully."
            });
        } catch (err) {
            next(err);
        }
    };

    async login (req, res, next) {
        try {
            const { email, password } = req.body;
            const { user } = await firebaseAuth().signInWithEmailAndPassword(email, password);
            const token = await user.getIdToken();
            return res.status(HttpStatusCode.CREATED).json({
                message: "User logged in successfully.",
                token: token
            });
        } catch (err) {
            next(err);
        }
    };
}

export default new AuthController();
