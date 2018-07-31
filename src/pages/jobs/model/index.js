import { List, Record } from 'immutable';

const JobState = new Record({
  criteria: '',
  jobs: new List(),
});

const JobModel = new Record({
  key: null,
  title: null,
  desc: null,
  mediaFile: null,
});

export {
  JobState,
  JobModel,
};
