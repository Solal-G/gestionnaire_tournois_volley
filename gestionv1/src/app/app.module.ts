import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { HttpClientModule } from '@angular/common/http';

import { EventService } from './services/event.service';
import { EventViewComponent } from './event-view/event-view.component';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { UserService } from './services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SingleEventComponent } from './single-event/single-event.component';
import { ConnectionService } from './services/connection.service';
import { HomeComponent } from './home/home.component';
import { ConnectionGuard } from './services/connection-guard.service';
import { TournamentComponent } from './tournament/tournament.component';
import { TournamentService } from './services/tournament.service';
import { NewTeamComponent } from './new-team/new-team.component';
import { TeamService } from './services/team.service';
import { TeamComponent } from './team/team.component';
import { NewEventComponent } from './new-event/new-event.component';
import { EventInProgressComponent } from './event-in-progress/event-in-progress.component';
import { LocalStorageService } from './services/localstorage.service';
import { PouleComponent } from './poule/poule.component';
import { TournamentViewComponent } from './tournament-view/tournament-view.component';
import { RoundComponent } from './round/round.component';
import { ResultsComponent } from './results/results.component';
import { SetResultsComponent } from './set-results/set-results.component';
import { Four0fourComponent } from './four0four/four0four.component';
import { RequestService } from './services/request.service';




const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'events', component: EventViewComponent},
  {path: 'events/new-event', canActivate:[ConnectionGuard], component: NewEventComponent},
  {path: 'events/:id', canActivate:[ConnectionGuard], component: SingleEventComponent},
  {path: 'events/**', component: Four0fourComponent},
  { path: 'connection', component: ConnectionComponent},
  { path: 'profile', canActivate:[ConnectionGuard], component: UserProfileComponent },
  
  {path: 'profile/:name', redirectTo: '/gestion/:name'},
  {path: 'gestion', canActivate:[ConnectionGuard], component: EventInProgressComponent},
  {path: 'gestion/:name', canActivate:[ConnectionGuard], component: EventInProgressComponent},
  {path: 'gestion/:name/:trn', canActivate:[ConnectionGuard], component: TournamentViewComponent},
  {path: 'gestion/:name/**', component: Four0fourComponent},
  { path: '404', component: Four0fourComponent},
  { path: '', component: HomeComponent},
  { path: '**', component: Four0fourComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventViewComponent,
    ConnectionComponent,
    UserProfileComponent,
    SingleEventComponent,
    HomeComponent,
    TournamentComponent,
    NewTeamComponent,
    TeamComponent,
    NewEventComponent,
    EventInProgressComponent,
    PouleComponent,
    TournamentViewComponent,
    RoundComponent,
    ResultsComponent,
    SetResultsComponent,
    Four0fourComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
     HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    EventService,
    UserService,
    ConnectionService,
    ConnectionGuard,
    TournamentService,
    TeamService,
    LocalStorageService,
    RequestService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
