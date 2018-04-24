import { Pipe, PipeTransform } from "@angular/core";
import { PostService } from '../services/post.service';

@Pipe({
    name: 'releaseTasks'
})
export class userReleaseTasksPipe implements PipeTransform {

    constructor (private postService: PostService) { };
    transform(tasks, value) {
        return tasks.filter(task => {
            return task.lead.includes(JSON.parse(localStorage.getItem("tfs18")).username) //&& this.postService.getReleaseData().includes(task.id)
        })//.filter(task => { return task.id.includes(3)})
    }
}