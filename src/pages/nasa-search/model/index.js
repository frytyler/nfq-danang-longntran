import { List, Record } from 'immutable';

const NasaState = new Record({
  criteria: '',
  items: new List(),
});

export default NasaState;
