import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBvozXgC0CFnIFyPtOpjjoa-5fs-_ImYLk',
  authDomain: 'nfq-dn-longntran.firebaseapp.com',
  databaseURL: 'https://nfq-dn-longntran.firebaseio.com',
  projectId: 'nfq-dn-longntran',
  storageBucket: '',
  messagingSenderId: '596491964589',
};

firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
export default databaseRef.child('jobs');
