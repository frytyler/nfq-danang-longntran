import FirebaseService from '../firebase/service';
import JobService from './job-service';

const jobService = new JobService(new FirebaseService('jobs'));

export default jobService;
