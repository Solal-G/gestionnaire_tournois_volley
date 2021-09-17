import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RequestService {


  url = "https://s6projet.000webhostapp.com/get.php";

  constructor(private http: HttpClient){}

 request(req) {
	var user = "id13334617_user";
	var pass = "ThisIsA_Password12";
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://s6projet.000webhostapp.com/get.php', false);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    var params = 'user='+user+'&pass='+pass+'&request='+req;
    xhr.send(params);
    if(xhr.status == 200) {
      // return xhr.responseText;
        if (xhr.responseText == "user,pass ou request non renseigné.") {
        	return "-1"; //Mauvais user/pass
        } else if (xhr.responseText == "MySQL connection error.") {
        	return "-2"; //Problème de connexion à la base de donnée
        } else {
        	return (xhr.responseText) //Si select on recupère la réponse
        }
    }
    
}

/*  (!isNaN(xhr.responseText)) {
        	return (xhr.responseText + "ligne(s) modifiée(s)."); //Nombre de lignes modifiée(s) (si update/delete...) */


//console.log(request("SELECT * FROM comptes"));

}