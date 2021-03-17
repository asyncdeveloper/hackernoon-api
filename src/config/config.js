import dotenv from 'dotenv';
import * as admin from 'firebase-admin';
import * as serviceAccount from '../../permissions.json';
import * as firebase from 'firebase/app';
import 'firebase/auth';

dotenv.config();

export default {
    APP_URL : process.env.APP_URL || 'localhost',
    APP_PORT: process.env.APP_PORT || 3001,
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1day'
}


export const firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DATABASE_URL
});

firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
});

export const firebaseAuth = firebase.auth
