import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Rx";
 
export class AuthGuard implements CanActivate{
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {        
        if (!localStorage.getItem('tfs18')) {           
            if (document.location.pathname !== "/login")
                document.location.replace("login");
        };
        return !!localStorage.getItem('tfs18');
    }
}