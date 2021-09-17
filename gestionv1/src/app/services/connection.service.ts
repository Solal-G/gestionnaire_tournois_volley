import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ConnectionService {
    isConnected = false;
    wrongPwd = false;
    pbCoBdd = false;
    constructor(private userService: UserService){}

    signOut(){
        this.isConnected = false;
        this.userService.eventInProgress = "";
        window.localStorage.clear();
    }

    connexion(username, password): boolean | void {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://s6projet.000webhostapp.com/login.php',false);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      //var params = 'username='+username+'&password='+password;
      var params = 'email='+username+'&password='+password;
      xhr.send(params);
        if(xhr.status == 200) {
          if (xhr.responseText == "Echoué") {
              this.wrongPwd = true;
              this.pbCoBdd =false; 
              return  true;//0; //Mauvais user/pass
          } else if (xhr.responseText == "Réussi") {
              this.isConnected = true;
              this.wrongPwd = false;
              this.pbCoBdd =false; 
              return true;//1; //La connexion a réussi
          } else {
            this.pbCoBdd =true; //Problème de connexion à la base de donnée
          }
        }
    }


}