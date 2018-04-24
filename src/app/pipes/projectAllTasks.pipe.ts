import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'projectAllTasks'
})
export class ProjectAllTasksPipe implements PipeTransform {
    transform(tasks, value) {
        return tasks.filter(task => {
            return task.projectId.includes(value)
        })
    }
}