import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public dataSubject = new Subject();
  // public dataState = this.dataSubject.asObservable();

  constructor() { }
  send(data) {
    this.dataSubject.next(data);
  }
}
