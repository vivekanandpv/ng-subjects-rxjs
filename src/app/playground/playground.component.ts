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
    this.demoService.person$.subscribe(
      (data) => console.log('Data 1', data),
      (error) => console.error('Error 1', error),
      () => console.log('Completed 1')
    );

    // second subscriber
    this.demoService.person$.subscribe(
      (data) => console.log('Data 2', data),
      (error) => console.error('Error 1', error),
      () => console.log('Completed 1')
    );

    //third
    this.demoService.person$.subscribe(
      (data) => console.log('Data 3', data),
      (error) => console.error('Error 1', error),
      () => console.log('Completed 1')
    );
  }
}
