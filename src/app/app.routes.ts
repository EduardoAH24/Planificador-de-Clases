import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { Register } from './pages/register/register';
import { ClassList} from './pages/class-list/class-list';
import { ClassFormComponent } from './pages/class-form/class-form';
import { Statistics } from './pages/statistics/statistics';
import { Calendar } from './pages/calendar/calendar';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: Register },
  { path: 'clases', component: ClassList },
  { path: 'clases/nueva', component: ClassFormComponent },
  { path: 'estadisticas', component: Statistics },
  { path: 'calendario', component: Calendar },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
