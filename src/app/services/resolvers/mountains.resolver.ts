import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { Mountain } from '../../models/mountain';

@Injectable()
export class MountainsResolver implements Resolve<Mountain[]> {

  constructor(private http: HttpService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Mountain[]> {
        const queryParams = route.queryParams;
        return this.http.getMountains(queryParams)
    }

}
