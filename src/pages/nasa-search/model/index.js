import { List, Record } from 'immutable';

const NasaSearchState = new Record({
  criteria: '',
  data: new List(),
});

export default NasaSearchState;
