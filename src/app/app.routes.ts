import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './pages/login/login.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { CondifencialComponent } from './pages/condifencial/condifencial.component';
import { RegistroComponent } from './pages/registro/registro.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'confidencial', component: CondifencialComponent },
    { path: 'galeria', component: GaleriaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },

    { path: '', redirectTo: 'home', pathMatch:'full'},
    { path: '**', component: Error404Component}

];
