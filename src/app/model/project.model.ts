import { User } from "./user.model"; 

export class Project {  
    
    constructor (){
        this.name = null;
        this.id = null;
        this.defaultSprintLengthSec = null;
        this.archivedAt = null;
        this.users = null
        this.createdAt = null;
    }
    name: String;
    id: String;
    defaultSprintLengthSec: number;
    archivedAt: Date;
    users: Array<User>;
    createdAt: String;
}