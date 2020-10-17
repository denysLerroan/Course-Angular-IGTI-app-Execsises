import { Component } from '@angular/core';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
})
export class ConfigComponent {
  exercises: Exercise[] = [];

  exercise: Exercise = {
    name: '',
    duration: 30,
    repetitions: 3,
    warmUp: 15,
    rest: 30,
  };

  constructor() {}

  add() {
    this.exercises.push(this.exercise);
    this.exercise = { ...this.exercise, name: '' };
  }

  delete(i: number) {
    this.exercises.splice(i, 1);
  }
}
