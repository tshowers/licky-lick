import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LickAppWidgetMenuService {

  constructor() { }

  public signOut() {
    console.log("Sign Out clicked")
  }

}
