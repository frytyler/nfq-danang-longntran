import * as firebase from 'firebase';
import { config } from './default.config';

export const firebaseApp = firebase.initializeApp(config);
export const firebaseDb = firebase.database();