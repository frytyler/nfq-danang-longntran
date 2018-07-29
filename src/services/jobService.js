import { JobModel } from '../pages/jobs/model';
import FirebaseService from '../firebase/service';
import {
  fetchJobsSuccessfully,
  removeJobSuccessfully,
  saveJobSuccessfully,
  updateJobSuccessfully,
} from '../pages/jobs/actions';

const jobService = new FirebaseService({
  onLoad: fetchJobsSuccessfully,
  onChange: updateJobSuccessfully,
  onAdd: saveJobSuccessfully,
  onRemove: removeJobSuccessfully,
}, JobModel);

export default jobService;
