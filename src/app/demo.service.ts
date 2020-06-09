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
    setInterval(() => {
      ++this.counter;
      this.personSubject.next(this.counter);
    }, 1000);
  }
}
