import dotenv from 'dotenv';
import * as admin from 'firebase-admin';
import * as serviceAccount from '../../permissions.json';

dotenv.config();

export default {
    APP_URL : process.env.APP_URL || 'localhost',
    APP_PORT: process.env.APP_PORT || 3001,
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1day'
}


export const firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DATABASE_URL || ''
});
