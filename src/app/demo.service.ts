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
  personSubject = new BehaviorSubject<Person>({
    name: 'Default User',
    id: 101,
  });

  constructor() {}
}
