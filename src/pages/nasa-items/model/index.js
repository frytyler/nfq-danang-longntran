import { List, Record } from 'immutable';

const NasaItemsState = new Record({
  criteria: '',
  data: new List(),
});

export default NasaItemsState;
