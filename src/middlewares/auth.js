import { firebaseAdmin } from '../config/config';
import { UnAuthorized } from '../utils/errors';

export const verifyToken = async (req, res, next) => {
    const token = extractToken(req);

    if (! token) {
        const e = new UnAuthorized('No token, Access Denied') ;
        return res.status(e.getCode()).json({
            message: e.message
        });
    }

    try {
        const payload = await firebaseAdmin.auth().verifyIdToken(token);
        req.userId = payload.user_id;
        req.userEmail = payload.email;
        next();
    } catch (err) {
        const e = new UnAuthorized('Invalid token, Access Denied') ;
        return res.status(e.getCode()).json({
            message: e.message
        });
    }
};

export const extractToken = (req, res) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
        return req.query.token;
    }
    return null;
};
