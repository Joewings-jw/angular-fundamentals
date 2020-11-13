import { Routes } from "@angular/router"
import { Error404Component } from './errors/404-component'
import { CreateEventComponent,
        EventListResolver,
        EventListComponent,
        EventDetailComponent,  
        CreateSessionComponent,
        EventsResolver
 } from './events/index'
import { LoginComponent } from './user/login/login.component'
import { ProfileComponent } from './user/profile/profile.component'


export const AppRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent},
    {path: 'events', component: EventListComponent, resolve: { events:EventListResolver }},
    {path: 'events/:id', component: EventDetailComponent, resolve: { event:EventsResolver }},
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user/profile', component: ProfileComponent},
    {path: 'user/login', component: LoginComponent}
   
   
]
