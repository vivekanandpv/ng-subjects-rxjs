import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Person {
  name: string;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  counter = 0;
  private personSubject = new BehaviorSubject<number>(this.counter);

  person$ = this.personSubject.asObservable();

  constructor() {
    setTimeout(() => {
      this.personSubject.next(10);
      this.personSubject.complete();
    }, 5000);
  }
}
