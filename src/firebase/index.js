import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';
import '@firebase/firestore';

import { config } from './default.config';

export const nfqFirebase = firebase.initializeApp(config);
export const rsf = new ReduxSagaFirebase(nfqFirebase);