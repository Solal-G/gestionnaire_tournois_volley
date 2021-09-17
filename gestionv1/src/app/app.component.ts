import { Component, OnInit } from '@angular/core';
import { ConnectionService } from './services/connection.service';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { RequestService } from './services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
  ngOnInit(){
    if(window.localStorage.getItem('tournament') == null){
      window.localStorage.setItem('tournament',JSON.stringify([]));
    }
    // pour clear le localstorage
    if(window.localStorage.getItem('tournament') != null){
      window.localStorage.setItem('tournament',JSON.stringify([]));
    }
  }
   go(){
    this.router.navigate(['gestion/'+this.userService.eventInProgress])
  }
   title = 'GTV';
  constructor(private connectionService: ConnectionService,
              private userService : UserService,
              private router : Router,
              private requestService: RequestService){}



}
