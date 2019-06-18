import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoteAssetService {

  private Content_Type_JSON = new  HttpHeaders({ 'Content-Type': 'application/json' });
  private Content_Type_Text = new  HttpHeaders({ 'Content-Type': 'text/plain' });
  private Content_Type_HTML = new  HttpHeaders({ 'Content-Type': 'text/html' });

  public JSON = 'json';
  public TEXT = 'text';


  constructor(private http: HttpClient) { }

  public getFileContents(url, contentType) : Observable<any> {
    return this.http.get(url, { responseType: contentType})
  }


}
