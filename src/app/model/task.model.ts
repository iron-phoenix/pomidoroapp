export class Task {

    constructor(){
        {
            this.id = null;
            this.subject = null;
            this.description = null;
            this.status = null;
            this.priority = null;
            this.sprintId = null;
            this.projectId = null;
            this.estimateTimeSec = null;
            this.executorId = null;
            this.executor = { 
                id: '',
                userName: '',
                firstName: '',
                lastName: '',
                email: ''
            }
            this.creator = {
                id: '',
                userName: '',
                firstName: '',
                lastName: '',
                email: ''
            };
        }        
    }
    id: number;
    subject: String;
    description: String;
    status: String;
    priority: String;
    sprintId: number;
    projectId: String;
    estimateTimeSec: number;
    executorId: String;
    executor: {
      id: String;
      userName: String;
      firstName: String;
      lastName: String;
      email: String;
    };
    creator: {
      id: String;
      userName: String;
      firstName: String;
      lastName: String;
      email: String
    }
  }