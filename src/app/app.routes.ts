import { Routes } from '@angular/router';

// Import page components
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: LandingComponent }, // default route
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', component: NotFoundComponent } // wildcard (404)
];
