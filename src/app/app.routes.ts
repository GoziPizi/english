import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'beginner-landing', loadComponent: () => import('./pages/beginner-landing/beginner-landing.component').then(m => m.BeginnerLandingComponent)},
    {path: 'thank-you-form', loadComponent: () => import('./pages/thank-you-form/thank-you-form.component').then(m => m.ThankYouFormComponent)},
    {path: 'mentions-legales', loadComponent: () => import('./pages/mentions-legales/mentions-legales.component').then(m => m.MentionsLegalesComponent)},
    {path: '', redirectTo: '/beginner-landing', pathMatch: 'full'},
    {path: '**', redirectTo: '/beginner-landing'}
];
