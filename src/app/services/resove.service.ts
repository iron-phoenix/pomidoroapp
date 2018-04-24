import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';  
import { CacheService } from './cache.service';

  @Injectable()
  export class StartResolver implements Resolve<any> {
    constructor(private cacheService: CacheService) {}

    resolve(
      route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot): Observable<any> | Promise<any> | any { 
        if (this.cacheService){
        this.cacheService.started()        
        .then(res => { return true })
        .catch(err => {return false});
        } else {
          return false;
        }
      }
  }