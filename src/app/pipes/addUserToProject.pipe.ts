import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../model/user.model";

@Pipe({
    name: 'addUserToProject'
})
export class addUserToProjectPipe implements PipeTransform {
    transform(users, projectUsers) {        
        return users.filter(user => {return !projectUsers.map(pU => {return pU.userName}).includes(user.userName);})            
    }
}