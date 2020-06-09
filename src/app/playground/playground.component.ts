import { Component, OnInit, OnDestroy } from '@angular/core';
import { DemoService } from '../demo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
})
export class PlaygroundComponent implements OnInit, OnDestroy {
  demoSubscription1: Subscription;
  demoSubscription2: Subscription;
  demoSubscription3: Subscription;

  constructor(private demoService: DemoService) {}

  ngOnInit(): void {
    this.demoSubscription1 = this.demoService.person$.subscribe(
      (data) => console.log('Data 1', data),
      (error) => console.error('Error 1', error),
      () => console.log('Completed 1')
    );

    // second subscriber
    this.demoSubscription2 = this.demoService.person$.subscribe(
      (data) => console.log('Data 2', data),
      (error) => console.error('Error 1', error),
      () => console.log('Completed 1')
    );

    //third
    this.demoSubscription3 = this.demoService.person$.subscribe(
      (data) => console.log('Data 3', data),
      (error) => console.error('Error 1', error),
      () => console.log('Completed 1')
    );
  }

  ngOnDestroy(): void {
    if (this.demoSubscription1) {
      this.demoSubscription1.unsubscribe();
    }

    if (this.demoSubscription2) {
      this.demoSubscription2.unsubscribe();
    }

    if (this.demoSubscription3) {
      this.demoSubscription3.unsubscribe();
    }
  }
}
