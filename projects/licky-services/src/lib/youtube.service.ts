import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey : string = environment.googleMapsKey;

  constructor(public http: HttpClient) { }

  getVideosForChannel(channel, maxResults): Observable<Object> {
    const url = "https://www.googleapis.com/youtube/v3/search?key=" + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
}
