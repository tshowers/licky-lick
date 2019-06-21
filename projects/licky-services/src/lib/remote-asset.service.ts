import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RemoteAssetService {

  private headers = new  HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }

  public storeData(data, url) {
    return this.http.put(url,
      data,
      { headers: this.headers })
  }


  public loadData(url) : Observable<any> {
    return this.http.get(url, {responseType: 'json'})
  }

  public getData(url)  {
    return this.http.get(url)
      .pipe(map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      ))

  }



}
