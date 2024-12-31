import { Routes } from '@angular/router';
import { KpComponent } from './kp/kp.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
    {path:'kp',component:KpComponent},
    {path:'todo',component:TodoComponent},
    {path:'',redirectTo:'/kp',pathMatch:'full'}
];
