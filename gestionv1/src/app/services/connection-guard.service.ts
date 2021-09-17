import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ConnectionService } from './connection.service';

@Injectable()
export class ConnectionGuard implements CanActivate{

    constructor(private connectionService: ConnectionService,
                private router: Router){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if(this.connectionService.isConnected) return true;
        else this.router.navigate(['/connection']);
    }

}