import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
})
export class PlaygroundComponent implements OnInit {
  constructor(private demoService: DemoService) {}

  ngOnInit(): void {
    this.demoService.personSubject.subscribe(
      (data) => console.log('Data', data),
      (error) => console.error('Error', error),
      () => console.log('Completed')
    );
  }
}
