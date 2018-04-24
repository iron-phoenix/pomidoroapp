import { Injectable } from "@angular/core";

@Injectable()
export class helpData {

    projects;
    tasks;
    release;
    userData;
    constructor(){
        this.projects = [
            {
            id: '1',
            name: "Проект1",
            dateStart: "07.04.2018",
            dateFinish: null,
            relise: "10.04.2018",
            oldRelises: [],
            discription: "Первый проект, отбражается так то",
            users: ["maximec","kirill","some_guy", "ivan_gay","katty_perry"]
            },
            {
            id: '2',
            name: "Проект2",
            dateStart: "06.04.2018",
            dateFinish: null,
            relise: "12.04.2018",
            oldRelises: [],
            discription: "второй проект, отбражается так то",
            users: ["maximec"]
            },
            {
            id: '3',
            name: "Проект3",
            dateStart: "05.04.2018",
            dateFinish: null,
            relise: "13.04.2018",
            oldRelises: [],
            discription: "третий проект, отбражается так то",
            users: ["maximec"]
            }
        ];
        
        this.tasks = [
            {
                id: 1,
                name: "Таск 1",
                discription: "Тяжелая таска",
                lead: "maximec",
                project: "1",
                status: "open"
            },
            {
                id: 2,
                name: "Таск 2",
                discription: "Тяжелая таска",
                lead: "maximec",
                project: "1",
                status: "open"
            },
            {
                id: 3,
                name: "Таск 3",
                discription: "Тяжелая таска",
                lead: "maximec",
                project: "1",
                status: "open"
            },
            {
                id: 4,
                name: "Таск 4",
                discription: "Тяжелая таска",
                lead: "maximec",
                project: "2",
                status: "open"
            },
            {
                id: 5,
                name: "Таск 5",
                discription: "Тяжелая таска",
                lead: "maximec",
                project: "2",
                status: "open"
            }

        ];
        this.release = [1,3,4];

        this.userData = {
            id: "1",
            login: "maximec",
            roleId: "1",
            firstName: "Юлия",
            lastName: "Максимович",
            birthday: "24.06.1993",
            status: 1,
            email: "maximec2406@mail.ru",
            phone: "+79112223344"
        }

    }   
}