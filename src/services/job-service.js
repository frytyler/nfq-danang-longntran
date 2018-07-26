class JobService {
  constructor(firebaseService) {
    this.fbService = firebaseService;
  }

  addTask(task) {
    return this.fbService.push(task);
  }

  subscribe(cb) {
    this.fbService.once('value', (snapshot) => {
      console.log(snapshot);
      cb(snapshot);
    });
  }
}

export default JobService;
