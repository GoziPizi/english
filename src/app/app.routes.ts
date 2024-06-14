import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'beginner-landing', loadComponent: () => import('./pages/beginner-landing/beginner-landing.component').then(m => m.BeginnerLandingComponent)},
    {path: '', redirectTo: 'beginner-landing', pathMatch: 'full'},
    {path: '**', redirectTo: 'beginner-landing'}
];
