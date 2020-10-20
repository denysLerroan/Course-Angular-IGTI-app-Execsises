import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnDestroy {
  interval: NodeJS.Timeout;

  constructor(public ts: TimerService) {}

  ngOnInit(): void {
    this.ts.restart();
  }

  ngOnDestroy(): void {
    this.pause();
  }

  formatPhase(phase: number) {
    switch (phase) {
      case 0:
        return 'Preparação';
      case 1:
        return 'Exercício';
      case 2:
        return 'Descanso';
    }
  }

  start() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.ts.decrementTimeLeft();
      }, 100);
    }
  }

  pause() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }

  restart() {
    this.ts.restart();
  }
  next() {
    this.ts.next();
  }
}
