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
  private personSubject = new BehaviorSubject<Person>({
    name: 'Default User',
    id: 101,
  });

  person$ = this.personSubject.asObservable();

  constructor() {}
}
