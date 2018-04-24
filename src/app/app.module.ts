import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HoverDirective } from './hover.directive';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchPipe } from './search.pipe';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SetupPageComponent } from './setup-page/setup-page.component';
import { PostService } from './services/post.service';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SettingsPageComponent } from './components/settings/settings-page/settings-page.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { TomatoComponent } from './components/tomato/tomato.component';
import { AuthGuard } from './guards/auth.guard';
import { helpData } from './help.data';
import { TaskListComponent } from './components/task-list/task-list.component';
import { userReleaseTasksPipe } from './pipes/userReleaseTasks.pipe';
import { userAllTasksPipe } from './pipes/userAllTasks.pipe';
import { ProjectAllTasksPipe } from './pipes/projectAllTasks.pipe';
import { AppRoutes } from './routes/routes';
import { ProjectSettingsPageComponent } from './components/settings/project-settings-page/project-settings-page.component';
import { RoleSettingsPageComponent } from './components/settings/role-settings-page/role-settings-page.component';
import { UserSettingsPageComponent } from './components/settings/user-settings-page/user-settings-page.component';
import { SettingsDirective } from './directives/settings.directive';
import { InfoMessageComponent } from './components/info-message/info-message.component';
import { MsgService } from './services/msg.servise';
import { UserListComponent } from './components/user-list/user-list.component';
import { InputErrorsComponent } from './components/input-errors/input-errors.component';
import { HttpClientModule }   from '@angular/common/http';
import { addUserToProjectPipe } from './pipes/addUserToProject.pipe';
import { activeProjectsPipe } from './pipes/activeProjects.pipe';
import { TaskSettingsComponent } from './components/settings/task-settings-page/task-settings-page.component';
import { CacheService } from './services/cache.service';
import { StartResolver } from './services/resove.service';


const routes = AppRoutes;

//  = [  
//   {path:  '', component: HomePageComponent, canActivate: [AuthGuard]},
//   {path:  'login',component: LoginPageComponent},
//   {path:  'settings', component: SettingsPageComponent, canActivate: [AuthGuard]} 
// ]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HoverDirective,
    SettingsDirective,
    SearchPipe,
    userReleaseTasksPipe,
    userAllTasksPipe,
    ProjectAllTasksPipe,
    addUserToProjectPipe,
    activeProjectsPipe,
    HomePageComponent,
    SetupPageComponent,
    LoginPageComponent,
    SettingsPageComponent,
    ProjectListComponent,
     TaskListComponent,
    TomatoComponent,
    ProjectSettingsPageComponent,
    RoleSettingsPageComponent,
    UserSettingsPageComponent,
    InfoMessageComponent,
    UserListComponent,
    InputErrorsComponent,
    TaskSettingsComponent         
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PostService, AuthGuard, helpData, MsgService, CacheService, StartResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
