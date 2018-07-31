/* eslint-disable */
import { firebaseDb, firebaseStorage } from './index';

const POST_PATH = 'jobs';

class FirebaseService {
  constructor(actions, modelClass) {
    this._actions = actions;
    this._modelClass = modelClass;
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

  uploadMedia(file) {
    return new Promise((resolve, reject) => {
      const childPath = `/images/${file.name}`;
      const storageRef = firebaseStorage.ref(childPath);
      const uploadTask = storageRef.put(file);
      uploadTask.on('state_changed',
        () => {},
        (error) => reject(error),
        () => {
          uploadTask.snapshot.ref.getDownloadURL()
            .then((downloadUrl) => resolve(downloadUrl));
        });
    })
  }

  subscribe(emit) {
    let ref = firebaseDb.ref(POST_PATH);
    let initialized = false;
    let list = [];

    ref.once('value', () => {
      initialized = true;
      emit(this._actions.onLoad(list));
    });

    ref.on('child_added', snapshot => {
      if (initialized) {
        emit(this._actions.onAdd(this.unwrapSnapshot(snapshot)));
      }
      else {
        list.push(this.unwrapSnapshot(snapshot));
      }
    });

    ref.on('child_changed', snapshot => {
      emit(this._actions.onChange(this.unwrapSnapshot(snapshot)));
    });

    ref.on('child_removed', snapshot => {
      emit(this._actions.onRemove(this.unwrapSnapshot(snapshot)));
    });

    return () => ref.off();
  }

  unwrapSnapshot(snapshot) {
    const attrs = snapshot.val();
    attrs.key = snapshot.key;
    return new this._modelClass(attrs);
  }
}

export default FirebaseService;
