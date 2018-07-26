class JobService {
  constructor(firebaseService) {
    this.fbService = firebaseService;
  }

  addTask(task) {
    return this.fbService.push(task);
  }

  subscribe() {
    this.fbService.subscribe((snapshot) => {
      console.log(snapshot);
    });
  }
}

export default JobService;
