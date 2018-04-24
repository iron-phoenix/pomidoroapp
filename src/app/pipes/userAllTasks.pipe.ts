import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'allTasks'
})
export class userAllTasksPipe implements PipeTransform {
    transform(tasks, value) {
        return tasks.filter(task => {
            return task.lead.includes(JSON.parse(localStorage.getItem("tfs18")).username)
        })
    }
}