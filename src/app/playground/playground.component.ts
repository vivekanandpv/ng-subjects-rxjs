import { Component, OnInit, OnDestroy } from '@angular/core';
import { DemoService } from '../demo.service';
import { Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';

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
    this.demoSubscription1 = this.demoService.person$
      .pipe(
        map((v) => v * v),
        map((v) => v - 1),
        take(4)
      )
      .subscribe(
        (data) => console.log('Data 1', data),
        (error) => console.error('Error 1', error),
        () => console.log('Completed 1')
      );
  }

  ngOnDestroy(): void {
    if (this.demoSubscription1) {
      this.demoSubscription1.unsubscribe();
    }
  }
}
