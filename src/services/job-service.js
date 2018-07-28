class JobService {
  constructor(firebaseService) {
    this.fbService = firebaseService;
  }

  addJob(job) {
    return this.fbService.push(job);
  }

  removeJob(key) {
    console.log('remove', key);
    return this.fbService.remove(key);
  }

  subscribe() {
    this.fbService.subscribe((snapshot) => {
      console.log(snapshot);
    });
  }
}

export default JobService;
