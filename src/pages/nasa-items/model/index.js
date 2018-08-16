import { List, Record } from 'immutable';

const JobState = new Record({
  criteria: '',
  jobs: new List(),
});

export default JobState;
