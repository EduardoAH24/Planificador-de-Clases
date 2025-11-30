import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { ClassList } from './pages/class-list/class-list';
import { ClassForm } from './pages/class-form/class-form';
import { Statistics } from './pages/statistics/statistics';
import { Calendar } from './pages/calendar/calendar';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'clases', component: ClassList },
  { path: 'clases/nueva', component: ClassForm },
  { path: 'estadisticas', component: Statistics },
  { path: 'calendario', component: Calendar },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
