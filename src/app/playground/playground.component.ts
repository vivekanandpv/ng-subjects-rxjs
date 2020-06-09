import { Component, OnInit, OnDestroy } from '@angular/core';
import { DemoService } from '../demo.service';
import { Subscription } from 'rxjs';
import { map, take, tap, first } from 'rxjs/operators';

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
        tap((v) => console.log('Inside Pipe : Before :', v)),
        map((v) => v * v),
        tap((v) => console.log('Inside Pipe : After :', v)),
        first((v) => v > 99)
      )
      .subscribe((data) => console.log('Final Subscriber', data));
  }

  ngOnDestroy(): void {
    if (this.demoSubscription1) {
      this.demoSubscription1.unsubscribe();
    }
  }
}
