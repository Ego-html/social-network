import { Routes } from '@angular/router';
import {ProfileEditorComponent} from "./profile-editor/profile-editor.component";
import {MainPageComponent} from "./main-page/main-page.component";

export const routes: Routes = [
  {path: 'profile', component: ProfileEditorComponent},
  {path: 'main', component: MainPageComponent}
];
