import { Component, Input } from '@angular/core';
import { Exercise } from '../exercise';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
})
export class ConfigComponent {
  exercise: Exercise = {
    name: '',
    duration: 30,
    repetitions: 3,
    warmUp: 15,
    rest: 30,
  };

  constructor(public ts: TimerService) {}

  add() {
    this.ts.add(this.exercise);
    this.exercise = { ...this.exercise, name: '' };
  }

  delete(i: number) {
    this.ts.delete(i);
  }
}
