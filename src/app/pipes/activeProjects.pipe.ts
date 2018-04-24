import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'activeProjects'
})
export class activeProjectsPipe implements PipeTransform {
    transform(projects) {        
        return projects ? (projects.filter(project => {return !project.archivedAt})) : projects             
    }
}