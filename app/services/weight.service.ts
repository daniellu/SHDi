import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Weight } from './../weight';
@Injectable()
export class WeightService {
  private weightUrl = 'app/weights';  // URL to web api
  constructor(private http: Http) { }
  getHeroes(): Promise<Weight[]> {
    return this.http.get(this.weightUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred in weight service', error);
    return Promise.reject(error.message || error);
  }
  
}
