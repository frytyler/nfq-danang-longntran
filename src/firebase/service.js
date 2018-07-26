import { firebaseDb } from './index';

const POST_PATH = 'jobs';

class FirebaseService {
  constructor(path) {
    this.path = path;
  }

  push(value) {
    return new Promise((resolve, reject) => {
      firebaseDb.ref(POST_PATH)
        .push(value, error => (error ? reject(error) : resolve()));
    });
  }

  remove(key) {
    return new Promise((resolve, reject) => {
      firebaseDb.ref(`${POST_PATH}/${key}`)
        .remove(error => (error ? reject(error) : resolve()));
    });
  }

  update(key, value) {
    return new Promise((resolve, reject) => {
      firebaseDb.ref(`${POST_PATH}/${key}`)
        .update(value, error => (error ? reject(error) : resolve()));
    });
  }

  subscribe(cb) {
    let ref = firebaseDb.ref(POST_PATH);

    ref.once('value', (payload) => {
      cb(payload);
    });

    return () => ref.off();
  }

}

export default FirebaseService;
