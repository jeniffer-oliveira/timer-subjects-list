import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TimerService {

  timer = 0;
  intervalId = 0;

  get hours() {
    return Math.floor(this.timer / 3600);
  }

  get minutes() {
    return Math.floor(this.timer / 60) % 60;
  }

  get seconds() {
    return this.timer % 60;
  }

  start() {
    if (!this.intervalId)
      setInterval(() => this.timer++, 1000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = 0;
    }

  }
}
