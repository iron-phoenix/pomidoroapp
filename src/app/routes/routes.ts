import { HomePageComponent } from "../components/home-page/home-page.component";
import { LoginPageComponent } from "../components/login-page/login-page.component";
import { SettingsPageComponent } from "../components/settings/settings-page/settings-page.component";
import { AuthGuard } from "../guards/auth.guard";
import { ProjectSettingsPageComponent } from "../components/settings/project-settings-page/project-settings-page.component";
import { UserSettingsPageComponent } from "../components/settings/user-settings-page/user-settings-page.component";
import { RoleSettingsPageComponent } from "../components/settings/role-settings-page/role-settings-page.component";
import { Routes } from "@angular/router";
import { TaskListComponent } from "../components/task-list/task-list.component";
import { TaskSettingsComponent } from "../components/settings/task-settings-page/task-settings-page.component";
import { StartResolver } from "../services/resove.service";

// let SettingsRoutes : Routes = [ 
    
// ];

export let AppRoutes : Routes = [  
    {path:  '', resolve: {st: StartResolver}, component: HomePageComponent, canActivate: [AuthGuard]},
    {path:  'login',component: LoginPageComponent},
    {path:  'settings', resolve: {st: StartResolver},component: SettingsPageComponent, canActivate: [AuthGuard]},// children: SettingsRoutes},
    { path: 'usersSettings', resolve: {st: StartResolver}, component: UserSettingsPageComponent, canActivate: [AuthGuard]},
    { path: 'usersSettings/:userId', component: UserSettingsPageComponent, canActivate: [AuthGuard]},
    { path: 'projectSettings', resolve: {st: StartResolver}, component: ProjectSettingsPageComponent, canActivate: [AuthGuard]},
    { path: 'projectSettings/:projectId',component: ProjectSettingsPageComponent, canActivate: [AuthGuard]},
    { path: 'tasks/:projectId/:taskId', component: TaskSettingsComponent, canActivate: [AuthGuard]}, 
    { path: 'tasks/:projectId', component: TaskSettingsComponent, canActivate: [AuthGuard]},    
    { path: 'roleSetings', resolve: {st: StartResolver}, component: RoleSettingsPageComponent, canActivate: [AuthGuard]}
];
